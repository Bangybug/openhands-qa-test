import { Triangle, Point } from './types';

export function triangleArea(triangle: Triangle): number {
  const [a, b, c] = triangle.vertices;
  return Math.abs((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)) / 2;
}

export function trianglePerimeter(triangle: Triangle): number {
  const [a, b, c] = triangle.vertices;
  const d1 = Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
  const d2 = Math.sqrt((c.x - b.x) ** 2 + (c.y - b.y) ** 2);
  const d3 = Math.sqrt((a.x - c.x) ** 2 + (a.y - c.y) ** 2);
  return d1 + d2 + d3;
}

export function triangleCentroid(triangle: Triangle): Point {
  const [a, b, c] = triangle.vertices;
  return {
    x: (a.x + b.x + c.x) / 3,
    y: (a.y + b.y + c.y) / 3
  };
}

export function triangleContainsPoint(triangle: Triangle, point: Point): boolean {
  const [a, b, c] = triangle.vertices;
  
  function sign(p1: Point, p2: Point, p3: Point): number {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  }
  
  const d1 = sign(point, a, b);
  const d2 = sign(point, b, c);
  const d3 = sign(point, c, a);
  
  const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
  const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);
  
  return !(hasNeg && hasPos);
}

export function createTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): Triangle {
  return {
    vertices: [
      { x: x1, y: y1 },
      { x: x2, y: y2 },
      { x: x3, y: y3 }
    ]
  };
}