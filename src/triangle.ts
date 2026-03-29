import { Point, Line, Triangle, IntersectionResult } from './types';

function sameSide(p1: Point, p2: Point, a: Point, b: Point): boolean {
  const cp1 = crossProduct(subtract(b, a), subtract(p1, a));
  const cp2 = crossProduct(subtract(b, a), subtract(p2, a));
  return dotProduct(cp1, cp2) >= 0;
}

function crossProduct(v: Point, w: Point): number {
  return v.x * w.y - v.y * w.x;
}

function dotProduct(v: Point, w: Point): number {
  return v.x * w.x + v.y * w.y;
}

function subtract(p1: Point, p2: Point): Point {
  return { x: p1.x - p2.x, y: p1.y - p2.y };
}

function pointInTriangle(p: Point, tri: Triangle): boolean {
  const [a, b, c] = tri.vertices;
  return sameSide(p, a, b, c) && sameSide(p, b, a, c) && sameSide(p, c, a, b);
}

function lineSegmentIntersection(
  p1: Point, p2: Point, p3: Point, p4: Point
): Point | null {
  const d1 = subtract(p2, p1);
  const d2 = subtract(p4, p3);
  const d3 = subtract(p1, p3);

  const cross = d1.x * d2.y - d1.y * d2.x;
  
  if (Math.abs(cross) < 1e-10) return null;

  const t = (d3.x * d2.y - d3.y * d2.x) / cross;
  const u = (d3.x * d1.y - d3.y * d1.x) / cross;

  if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
    return {
      x: p1.x + t * d1.x,
      y: p1.y + t * d1.y
    };
  }

  return null;
}

export function lineTriangleIntersection(line: Line, triangle: Triangle): IntersectionResult {
  const [v0, v1, v2] = triangle.vertices;
  const points: Point[] = [];

  const edges: [Point, Point][] = [
    [v0, v1],
    [v1, v2],
    [v2, v0]
  ];

  for (const [p1, p2] of edges) {
    const intersection = lineSegmentIntersection(line.start, line.end, p1, p2);
    if (intersection) {
      points.push(intersection);
    }
  }

  const uniquePoints: Point[] = [];
  for (const p of points) {
    let isDuplicate = false;
    for (const existing of uniquePoints) {
      if (Math.abs(p.x - existing.x) < 1e-10 && Math.abs(p.y - existing.y) < 1e-10) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniquePoints.push(p);
    }
  }

  return {
    intersects: uniquePoints.length > 0,
    points: uniquePoints.length > 0 ? uniquePoints : undefined
  };
}