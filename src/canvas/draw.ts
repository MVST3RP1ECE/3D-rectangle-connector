import { Rect, Point } from '../geometry/types';

/**
 * Рисует прямоугольник на canvas
 */

export function drawRect(ctx: CanvasRenderingContext2D, rect: Rect, color = 'rgba(0,0,255,0.5)') {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(
    rect.position.x - rect.size.width / 2,
    rect.position.y - rect.size.height / 2,
    rect.size.width,
    rect.size.height
  );
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

/**
 * Рисует ломаную линию по массиву точек
 */

export function drawPolyline(ctx: CanvasRenderingContext2D, points: Point[], color = '#000') {
  if (points.length < 2) return;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
  ctx.restore();
}