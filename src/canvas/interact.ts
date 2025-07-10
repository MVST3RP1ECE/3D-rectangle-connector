import { Rect, ConnectionPoint, Point } from '../geometry/types';

export type DragTarget =
  | { type: 'rect'; rectIndex: number }
  | { type: 'cpoint'; cpointIndex: number };

/**
 * Проверяет, находится ли точка внутри прямоугольника
 */
export function isPointInRect(point: Point, rect: Rect): boolean {
  return (
    point.x >= rect.position.x - rect.size.width / 2 &&
    point.x <= rect.position.x + rect.size.width / 2 &&
    point.y >= rect.position.y - rect.size.height / 2 &&
    point.y <= rect.position.y + rect.size.height / 2
  );
}

/**
 * Проверяет, находится ли точка вблизи соединительной точки (радиус 10px)
 */
export function isPointNear(point: Point, target: Point, radius = 5): boolean {
  const dx = point.x - target.x;
  const dy = point.y - target.y;
  return dx * dx + dy * dy <= radius * radius;
} 