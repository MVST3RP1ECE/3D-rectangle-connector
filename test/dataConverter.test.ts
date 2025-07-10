import { dataConverter } from '../src/dataConverter';
import { Rect, ConnectionPoint, Point } from '../src/geometry/types';

describe('dataConverter', () => {
  const rect1: Rect = { position: { x: 100, y: 100 }, size: { width: 80, height: 40 } };
  const rect2: Rect = { position: { x: 300, y: 100 }, size: { width: 80, height: 40 } };

  it('строит ломаную для корректных соединений (слева-направо)', () => {
    const cPoint1: ConnectionPoint = { point: { x: 60, y: 100 }, angle: 180 };
    const cPoint2: ConnectionPoint = { point: { x: 340, y: 100 }, angle: 0 };
    const points = dataConverter(rect1, rect2, cPoint1, cPoint2);
    expect(points.length).toBe(4);
    expect(points[0]).toEqual(cPoint1.point);
    expect(points[3]).toEqual(cPoint2.point);
  });

  it('выбрасывает ошибку, если точка соединения не на грани', () => {
    const cPoint1: ConnectionPoint = { point: { x: 100, y: 100 }, angle: 180 };
    const cPoint2: ConnectionPoint = { point: { x: 340, y: 100 }, angle: 0 };
    expect(() => dataConverter(rect1, rect2, cPoint1, cPoint2)).toThrow();
  });

  it('выбрасывает ошибку, если угол не наружу', () => {
    const cPoint1: ConnectionPoint = { point: { x: 60, y: 100 }, angle: 0 }; // внутрь
    const cPoint2: ConnectionPoint = { point: { x: 340, y: 100 }, angle: 0 };
    expect(() => dataConverter(rect1, rect2, cPoint1, cPoint2)).toThrow();
  });
}); 