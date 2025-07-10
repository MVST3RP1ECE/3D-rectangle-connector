import { Point, Rect, ConnectionPoint } from './geometry/types';
import { isPointOnRectEdge, isAngleOutward, getOffsetPoint, getRectEdgeNormal, doesSegmentIntersectRect } from './geometry/rectUtils';


export const dataConverter = (
  rect1: Rect,
  rect2: Rect,
  cPoint1: ConnectionPoint,
  cPoint2: ConnectionPoint
): Point[] => {
  // Проверка корректности соединений
  if (!isPointOnRectEdge(rect1, cPoint1.point)) {
    throw new Error('Точка соединения 1 не лежит на грани прямоугольника 1');
  }
  if (!isPointOnRectEdge(rect2, cPoint2.point)) {
    throw new Error('Точка соединения 2 не лежит на грани прямоугольника 2');
  }

  // Если угол не наружу, заменить его на наружный (перпендикуляр к грани)
  let angle1 = cPoint1.angle;
  if (!isAngleOutward(rect1, cPoint1)) {
    const normal = getRectEdgeNormal(rect1, cPoint1.point);
    if (normal) {
      angle1 = Math.atan2(normal.y, normal.x) * 180 / Math.PI;
    }
  }
  let angle2 = cPoint2.angle;
  if (!isAngleOutward(rect2, cPoint2)) {
    const normal = getRectEdgeNormal(rect2, cPoint2.point);
    if (normal) {
      angle2 = Math.atan2(normal.y, normal.x) * 180 / Math.PI;
    }
  }

  // Стартовая и конечная точки с небольшим отступом от прямоугольника
  const OFFSET = 16; // px
  const start = getOffsetPoint(cPoint1.point, angle1, OFFSET);
  const end = getOffsetPoint(cPoint2.point, angle2, OFFSET);

  // Проверяем, пересекает ли прямой путь какой-либо прямоугольник
  const intersects1 = doesSegmentIntersectRect(start, end, rect1);
  const intersects2 = doesSegmentIntersectRect(start, end, rect2);
  if (!intersects1 && !intersects2) {
    return [cPoint1.point, start, end, cPoint2.point];
  }

  // Если пересекает, строим ломаную с обходом (манхэттенский маршрут)
  // Сначала идём по X, потом по Y (или наоборот, если так не пересекает)
  const mid1: Point = { x: end.x, y: start.y };
  const mid2: Point = { x: start.x, y: end.y };
  // Проверяем оба варианта обхода
  const cross1 = doesSegmentIntersectRect(start, mid1, rect1) || doesSegmentIntersectRect(start, mid1, rect2) ||
    doesSegmentIntersectRect(mid1, end, rect1) || doesSegmentIntersectRect(mid1, end, rect2);
  if (!cross1) {
    return [cPoint1.point, start, mid1, end, cPoint2.point];
  }
  const cross2 = doesSegmentIntersectRect(start, mid2, rect1) || doesSegmentIntersectRect(start, mid2, rect2) ||
    doesSegmentIntersectRect(mid2, end, rect1) || doesSegmentIntersectRect(mid2, end, rect2);
  if (!cross2) {
    return [cPoint1.point, start, mid2, end, cPoint2.point];
  }
  // Если оба варианта пересекают, возвращаем базовый (но такого быть не должно)
  return [cPoint1.point, start, end, cPoint2.point];
}; 