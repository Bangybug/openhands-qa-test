export function createAABB(minX: number, minY: number, maxX: number, maxY: number) {
  return {
    min: { x: minX, y: minY },
    max: { x: maxX, y: maxY }
  };
}

export function aabbWidth(aabb: { min: { x: number; y: number }; max: { x: number; y: number } }): number {
  return aabb.max.x - aabb.min.x;
}

export function aabbHeight(aabb: { min: { x: number; y: number }; max: { x: number; y: number } }): number {
  return aabb.max.y - aabb.min.y;
}

export function aabbCenter(aabb: { min: { x: number; y: number }; max: { x: number; y: number } }): { x: number; y: number } {
  return {
    x: (aabb.min.x + aabb.max.x) / 2,
    y: (aabb.min.y + aabb.max.y) / 2
  };
}

export function expandAABB(aabb: { min: { x: number; y: number }; max: { x: number; y: number } }, amount: number) {
  return {
    min: { x: aabb.min.x - amount, y: aabb.min.y - amount },
    max: { x: aabb.max.x + amount, y: aabb.max.y + amount }
  };
}

export function aabbContainsPoint(aabb: { min: { x: number; y: number }; max: { x: number; y: number } }, point: { x: number; y: number }): boolean {
  return point.x >= aabb.min.x && point.x <= aabb.max.x &&
         point.y >= aabb.min.y && point.y <= aabb.max.y;
}