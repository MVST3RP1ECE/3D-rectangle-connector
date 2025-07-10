import { drawRect, drawPolyline } from './canvas/draw';
import { dataConverter } from './dataConverter';
import { Rect, ConnectionPoint, Point } from './geometry/types';
import { isPointInRect, isPointNear, DragTarget } from './canvas/interact';
// import { isPointOnRectEdge } from './geometry/rectUtils';

// Функция для привязки точки к ближайшей грани прямоугольника
function snapPointToRectEdge(rect: Rect, point: Point): Point {
  const { position, size } = rect;
  const left = position.x - size.width / 2;
  const right = position.x + size.width / 2;
  const top = position.y - size.height / 2;
  const bottom = position.y + size.height / 2;
  // Считаем расстояния до каждой из четырёх граней
  const dLeft = Math.abs(point.x - left);
  const dRight = Math.abs(point.x - right);
  const dTop = Math.abs(point.y - top);
  const dBottom = Math.abs(point.y - bottom);
  const minDist = Math.min(dLeft, dRight, dTop, dBottom);
  if (minDist === dLeft) return { x: left, y: Math.max(top, Math.min(point.y, bottom)) };
  if (minDist === dRight) return { x: right, y: Math.max(top, Math.min(point.y, bottom)) };
  if (minDist === dTop) return { x: Math.max(left, Math.min(point.x, right)), y: top };
  return { x: Math.max(left, Math.min(point.x, right)), y: bottom };
}

const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// Пример данных для начальной отрисовки
let rect1: Rect = { position: { x: 150, y: 100 }, size: { width: 80, height: 80 } };
let rect2: Rect = { position: { x: 500, y: 250 }, size: { width: 80, height: 80 } };
let cPoint1: ConnectionPoint = { point: { x: 150, y: 60 }, angle: -90 };
let cPoint2: ConnectionPoint = { point: { x: 500, y: 290 }, angle: 90 };

function drawConnectionPoint(ctx: CanvasRenderingContext2D, p: Point) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(p.x, p.y, 7, 0, 2 * Math.PI);
  ctx.fillStyle = '#1976d2';
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawRect(ctx, rect1);
  drawRect(ctx, rect2);

  drawConnectionPoint(ctx, cPoint1.point);
  drawConnectionPoint(ctx, cPoint2.point);

  const polyline = dataConverter(rect1, rect2, cPoint1, cPoint2);
  drawPolyline(ctx, polyline);
}



// Drag&Drop
let dragTarget: DragTarget | null = null;
let dragOffset: Point = { x: 0, y: 0 };

canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  console.log(rect);
  const mouse: Point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  // Проверяем соединительные точки
  if (isPointNear(mouse, cPoint1.point)) {
    dragTarget = { type: 'cpoint', cpointIndex: 1 };
    dragOffset = { x: mouse.x - cPoint1.point.x, y: mouse.y - cPoint1.point.y };
    return;
  }
  if (isPointNear(mouse, cPoint2.point)) {
    dragTarget = { type: 'cpoint', cpointIndex: 2 };
    dragOffset = { x: mouse.x - cPoint2.point.x, y: mouse.y - cPoint2.point.y };
    return;
  }
  // Проверяем прямоугольники
  if (isPointInRect(mouse, rect1)) {
    dragTarget = { type: 'rect', rectIndex: 1 };
    dragOffset = { x: mouse.x - rect1.position.x, y: mouse.y - rect1.position.y };
    return;
  }
  if (isPointInRect(mouse, rect2)) {
    dragTarget = { type: 'rect', rectIndex: 2 };
    dragOffset = { x: mouse.x - rect2.position.x, y: mouse.y - rect2.position.y };
    return;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (!dragTarget) return;

  const rect = canvas.getBoundingClientRect();
  const mouse: Point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  if (dragTarget.type === 'rect') {
    if (dragTarget.rectIndex === 1) {
      rect1.position = { x: mouse.x - dragOffset.x, y: mouse.y - dragOffset.y };
      // Перемещаем и соединительную точку вместе с прямоугольником
      const dx = rect1.position.x - cPoint1.point.x;
      const dy = rect1.position.y - cPoint1.point.y;
      cPoint1.point = { x: cPoint1.point.x + dx, y: cPoint1.point.y + dy };
    } else {
      rect2.position = { x: mouse.x - dragOffset.x, y: mouse.y - dragOffset.y };
      const dx = rect2.position.x - cPoint2.point.x;
      const dy = rect2.position.y - cPoint2.point.y;
      cPoint2.point = { x: cPoint2.point.x + dx, y: cPoint2.point.y + dy };
    }
  } else if (dragTarget.type === 'cpoint') {
    if (dragTarget.cpointIndex === 1) {
      cPoint1.point = snapPointToRectEdge(rect1, { x: mouse.x - dragOffset.x, y: mouse.y - dragOffset.y });
    } else {
      cPoint2.point = snapPointToRectEdge(rect2, { x: mouse.x - dragOffset.x, y: mouse.y - dragOffset.y });
    }
  }
  render();
});

canvas.addEventListener('mouseup', () => {
  dragTarget = null;
});

canvas.addEventListener('mouseleave', () => {
  dragTarget = null;
});

render(); 