import { Point } from './types';

export function angle(p1: Point, p2: Point): number {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

export function angleBetween(p1: Point, p2: Point, p3: Point): number {
  const a = angle(p2, p1);
  const b = angle(p2, p3);
  let diff = b - a;
  while (diff < -Math.PI) diff += 2 * Math.PI;
  while (diff > Math.PI) diff -= 2 * Math.PI;
  return Math.abs(diff);
}

export function angleFromHorizontal(start: Point, end: Point): number {
  return Math.atan2(end.y - start.y, end.x - start.x);
}

export function normalizeAngle(angle: number): number {
  while (angle < 0) angle += 2 * Math.PI;
  while (angle >= 2 * Math.PI) angle -= 2 * Math.PI;
  return angle;
}

export function angleDiff(a1: number, a2: number): number {
  let diff = a1 - a2;
  while (diff < -Math.PI) diff += 2 * Math.PI;
  while (diff > Math.PI) diff -= 2 * Math.PI;
  return diff;
}