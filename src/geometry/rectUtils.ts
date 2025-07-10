import { Point, Rect, ConnectionPoint } from './types';

/**
 * Проверяет, лежит ли точка на одной из граней прямоугольника (с учетом допуска)
 * @param rect Прямоугольник
 * @param point Точка
 * @param epsilon Допуск (по умолчанию 1e-6)
 */
export function isPointOnRectEdge(rect: Rect, point: Point, epsilon = 1e-6): boolean {
  const { position, size } = rect;
  const left = position.x - size.width / 2;
  const right = position.x + size.width / 2;
  const top = position.y - size.height / 2;
  const bottom = position.y + size.height / 2;
  // Проверяем, лежит ли точка на одной из четырех граней
  const onLeft = Math.abs(point.x - left) < epsilon && point.y >= top - epsilon && point.y <= bottom + epsilon;
  const onRight = Math.abs(point.x - right) < epsilon && point.y >= top - epsilon && point.y <= bottom + epsilon;
  const onTop = Math.abs(point.y - top) < epsilon && point.x >= left - epsilon && point.x <= right + epsilon;
  const onBottom = Math.abs(point.y - bottom) < epsilon && point.x >= left - epsilon && point.x <= right + epsilon;
  return onLeft || onRight || onTop || onBottom;
}

/**
 * Возвращает нормаль (единичный вектор) наружу для точки на грани прямоугольника
 * @param rect Прямоугольник
 * @param point Точка на грани
 */
export function getRectEdgeNormal(rect: Rect, point: Point): Point | null {
  const { position, size } = rect;
  const left = position.x - size.width / 2;
  const right = position.x + size.width / 2;
  const top = position.y - size.height / 2;
  const bottom = position.y + size.height / 2;
  if (Math.abs(point.x - left) < 1e-6) return { x: -1, y: 0 };
  if (Math.abs(point.x - right) < 1e-6) return { x: 1, y: 0 };
  if (Math.abs(point.y - top) < 1e-6) return { x: 0, y: -1 };
  if (Math.abs(point.y - bottom) < 1e-6) return { x: 0, y: 1 };
  return null;
}

/**
 * Проверяет, что угол соединения перпендикулярен грани и направлен наружу
 * @param rect Прямоугольник
 * @param cPoint Точка соединения
 * @param epsilon Допуск (по умолчанию 1e-4)
 */
export function isAngleOutward(rect: Rect, cPoint: ConnectionPoint, epsilon = 1e-4): boolean {
  const normal = getRectEdgeNormal(rect, cPoint.point);
  if (!normal) return false;
  // Переводим угол в радианы
  const angleRad = (cPoint.angle * Math.PI) / 180;
  const dir = { x: Math.cos(angleRad), y: Math.sin(angleRad) };
  // Скалярное произведение должно быть положительным (направление наружу)
  const dot = normal.x * dir.x + normal.y * dir.y;
  // И направление должно быть почти перпендикулярно (dot ~ 1)
  return dot > 1 - epsilon;
}

/**
 * Возвращает точку, смещённую от исходной на заданное расстояние по углу
 * @param point Исходная точка
 * @param angle Угол в градусах
 * @param distance Расстояние
 */
export function getOffsetPoint(point: Point, angle: number, distance: number): Point {
  const rad = (angle * Math.PI) / 180;
  return {
    x: point.x + Math.cos(rad) * distance,
    y: point.y + Math.sin(rad) * distance,
  };
}

/**
 * Проверяет, пересекает ли отрезок [a, b] прямоугольник rect
 */
export function doesSegmentIntersectRect(a: Point, b: Point, rect: Rect): boolean {
  const { position, size } = rect;
  const left = position.x - size.width / 2;
  const right = position.x + size.width / 2;
  const top = position.y - size.height / 2;
  const bottom = position.y + size.height / 2;

  // Вспомогательная функция для пересечения двух отрезков
  function segmentsIntersect(p1: Point, p2: Point, q1: Point, q2: Point): boolean {
    function ccw(a: Point, b: Point, c: Point) {
      return (c.y - a.y) * (b.x - a.x) > (b.y - a.y) * (c.x - a.x);
    }
    return (
      ccw(p1, q1, q2) !== ccw(p2, q1, q2) &&
      ccw(p1, p2, q1) !== ccw(p1, p2, q2)
    );
  }

  // Грани прямоугольника
  const corners = [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom },
  ];
  for (let i = 0; i < 4; i++) {
    const p1 = corners[i];
    const p2 = corners[(i + 1) % 4];
    if (segmentsIntersect(a, b, p1, p2)) return true;
  }
  // Также проверим, не лежит ли весь отрезок внутри прямоугольника
  const inside =
    a.x >= left && a.x <= right && a.y >= top && a.y <= bottom &&
    b.x >= left && b.x <= right && b.y >= top && b.y <= bottom;
  return inside;
} 