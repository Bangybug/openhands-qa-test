import { Point, Line, Circle, IntersectionResult } from './types';
import { distance } from './line';

export function lineCircleIntersection(line: Line, circle: Circle): IntersectionResult {
  const cx = circle.center.x;
  const cy = circle.center.y;
  const r = circle.radius;

  const dx = line.end.x - line.start.x;
  const dy = line.end.y - line.start.y;

  const fx = line.start.x - cx;
  const fy = line.start.y - cy;

  const a = dx * dx + dy * dy;
  const b = 2 * (fx * dx + fy * dy);
  const c = fx * fx + fy * fy - r * r;

  let discriminant = b * b - 4 * a * c;
  
  if (discriminant < 0) {
    return { intersects: false };
  }

  discriminant = Math.sqrt(discriminant);
  
  const t1 = (-b - discriminant) / (2 * a);
  const t2 = (-b + discriminant) / (2 * a);

  const points: Point[] = [];

  if (t1 >= 0 && t1 <= 1) {
    points.push({
      x: line.start.x + t1 * dx,
      y: line.start.y + t1 * dy
    });
  }

  if (t2 >= 0 && t2 <= 1 && Math.abs(t1 - t2) > 1e-10) {
    points.push({
      x: line.start.x + t2 * dx,
      y: line.start.y + t2 * dy
    });
  }

  return {
    intersects: points.length > 0,
    points: points.length > 0 ? points : undefined
  };
}