import { Point, Line, Triangle, IntersectionResult } from './types';

function subtract(p1: Point, p2: Point): Point {
  return { x: p1.x - p2.x, y: p1.y - p2.y };
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
      if (Math.abs(p.x - existing.x) < 1e-9 && Math.abs(p.y - existing.y) < 1e-9) {
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

export function pointInTriangle(p: Point, tri: Triangle): boolean {
  const [a, b, c] = tri.vertices;
  
  function sign(p1: Point, p2: Point, p3: Point): number {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  }
  
  const d1 = sign(p, a, b);
  const d2 = sign(p, b, c);
  const d3 = sign(p, c, a);
  
  const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
  const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);
  
  return !(hasNeg && hasPos);
}