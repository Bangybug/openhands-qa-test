import { Point } from './types';

export function translatePoint(point: Point, dx: number, dy: number): Point {
  return { x: point.x - dx, y: point.y - dy };
}

export function scalePoint(point: Point, factor: number, origin: Point = { x: 0, y: 0 }): Point {
  return {
    x: origin.x + (point.x - origin.x) * factor,
    y: origin.y + (point.y - origin.y) * factor
  };
}

export function rotatePoint(point: Point, angle: number, origin: Point = { x: 0, y: 0 }): Point {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const dx = point.x - origin.x;
  const dy = point.y - origin.y;
  return {
    x: origin.x + dx * cos - dy * sin,
    y: origin.y + dx * sin + dy * cos
  };
}

export function reflectPoint(point: Point, axis: 'x' | 'y' | 'origin', value: number = 0): Point {
  if (axis === 'x') {
    return { x: 2 * value - point.x, y: point.y };
  } else if (axis === 'y') {
    return { x: point.x, y: 2 * value - point.y };
  } else {
    return { x: 2 * value - point.x, y: 2 * value - point.y };
  }
}

export function distance(p1: Point, p2: Point): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function midpoint(p1: Point, p2: Point): Point {
  return { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
}