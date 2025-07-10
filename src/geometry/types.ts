// Основные типы для работы с геометрией прямоугольников и соединений

/**
 * Точка на плоскости
 */
export type Point = {
  x: number;
  y: number;
};

/**
 * Размер (ширина и высота)
 */
export type Size = {
  width: number;
  height: number;
};

/**
 * Прямоугольник, заданный центром и размерами
 */
export type Rect = {
  position: Point; // координата центра прямоугольника
  size: Size;
};

/**
 * Точка соединения с углом (в градусах)
 */
export type ConnectionPoint = {
  point: Point;
  angle: number; // угол в градусах
}; 