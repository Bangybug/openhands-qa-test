import { Point } from './types';

export function add(p1: Point, p2: Point): Point {
  return { x: p1.x + p2.x, y: p1.y + p2.y };
}

export function subtract(p1: Point, p2: Point): Point {
  return { x: p1.x - p2.x, y: p1.y - p2.y };
}

export function scale(p: Point, scalar: number): Point {
  return { x: p.x * scalar, y: p.y * scalar };
}

export function dot(p1: Point, p2: Point): number {
  return p1.x * p2.x + p1.y * p2.y;
}

export function cross(p1: Point, p2: Point): number {
  return p1.x * p2.y - p1.y * p2.x;
}

export function magnitude(p: Point): number {
  return Math.sqrt(p.x * p.x + p.y * p.y);
}

export function normalize(p: Point): Point {
  const mag = magnitude(p);
  if (mag === 0) return { x: 0, y: 0 };
  return { x: p.x / mag, y: p.y / mag };
}

export function lerp(p1: Point, p2: Point, t: number): Point {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}