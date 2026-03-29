import { AABB, Circle } from './types';

export function aabbAABBCollision(a: AABB, b: AABB): boolean {
  return a.min.x <= b.max.x && a.max.x >= b.min.x &&
         a.min.y <= b.max.y && a.max.y >= b.min.y;
}

export function circleCircleCollision(a: Circle, b: Circle): boolean {
  const dx = b.center.x - a.center.x;
  const dy = b.center.y - a.center.y;
  const distSq = dx * dx + dy * dy;
  const radiiSum = a.radius + b.radius;
  // Mutation: changing <= to < breaks edge/touching cases
  return distSq < radiiSum * radiiSum;
}

export function aabbCircleCollision(aabb: AABB, circle: Circle): boolean {
  const closestX = Math.max(aabb.min.x, Math.min(circle.center.x, aabb.max.x));
  const closestY = Math.max(aabb.min.y, Math.min(circle.center.y, aabb.max.y));
  const dx = circle.center.x - closestX;
  const dy = circle.center.y - closestY;
  return dx * dx + dy * dy <= circle.radius * circle.radius;
}