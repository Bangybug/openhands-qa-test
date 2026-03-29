import { Point, Line, AABB, IntersectionResult } from './types';

export function lineAABBIntersection(line: Line, aabb: AABB): IntersectionResult {
  let tmin = 0;
  let tmax = 1;
  const dx = line.end.x - line.start.x;
  const dy = line.end.y - line.start.y;

  if (Math.abs(dx) < 1e-10) {
    if (line.start.x < aabb.min.x || line.start.x > aabb.max.x) {
      return { intersects: false };
    }
  } else {
    let t1 = (aabb.min.x - line.start.x) / dx;
    let t2 = (aabb.max.x - line.start.x) / dx;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return { intersects: false };
  }

  if (Math.abs(dy) < 1e-10) {
    if (line.start.y < aabb.min.y || line.start.y > aabb.max.y) {
      return { intersects: false };
    }
  } else {
    let t1 = (aabb.min.y - line.start.y) / dy;
    let t2 = (aabb.max.y - line.start.y) / dy;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return { intersects: false };
  }

  if (tmin >= 0 && tmin <= 1) {
    return {
      intersects: true,
      points: [{
        x: line.start.x + tmin * dx,
        y: line.start.y + tmin * dy
      }]
    };
  }

  return { intersects: false };
}