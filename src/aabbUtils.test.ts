import { createAABB, aabbWidth, aabbHeight, aabbCenter, expandAABB, aabbContainsPoint } from './aabbUtils';

describe('aabbUtils', () => {
  describe('createAABB', () => {
    it('should create an AABB from coordinates', () => {
      const aabb = createAABB(0, 0, 10, 20);
      expect(aabb.min.x).toBe(0);
      expect(aabb.min.y).toBe(0);
      expect(aabb.max.x).toBe(10);
      expect(aabb.max.y).toBe(20);
    });
  });

  describe('aabbWidth', () => {
    it('should return the width of an AABB', () => {
      const aabb = createAABB(0, 0, 10, 20);
      expect(aabbWidth(aabb)).toBe(10);
    });
  });

  describe('aabbHeight', () => {
    it('should return the height of an AABB', () => {
      const aabb = createAABB(0, 0, 10, 20);
      expect(aabbHeight(aabb)).toBe(20);
    });
  });

  describe('aabbCenter', () => {
    it('should return the center point of an AABB', () => {
      const aabb = createAABB(0, 0, 10, 20);
      const center = aabbCenter(aabb);
      expect(center.x).toBe(5);
      expect(center.y).toBe(10);
    });

    it('should handle negative coordinates', () => {
      const aabb = createAABB(-10, -20, 10, 20);
      const center = aabbCenter(aabb);
      expect(center.x).toBe(0);
      expect(center.y).toBe(0);
    });
  });

  describe('expandAABB', () => {
    it('should expand AABB by amount', () => {
      const aabb = createAABB(0, 0, 10, 10);
      const expanded = expandAABB(aabb, 5);
      expect(expanded.min.x).toBe(-5);
      expect(expanded.min.y).toBe(-5);
      expect(expanded.max.x).toBe(15);
      expect(expanded.max.y).toBe(15);
    });
  });

  describe('aabbContainsPoint', () => {
    it('should return true for point inside AABB', () => {
      const aabb = createAABB(0, 0, 10, 10);
      expect(aabbContainsPoint(aabb, { x: 5, y: 5 })).toBe(true);
    });

    it('should return true for point on edge', () => {
      const aabb = createAABB(0, 0, 10, 10);
      expect(aabbContainsPoint(aabb, { x: 0, y: 5 })).toBe(true);
      expect(aabbContainsPoint(aabb, { x: 10, y: 5 })).toBe(true);
    });

    it('should return false for point outside AABB', () => {
      const aabb = createAABB(0, 0, 10, 10);
      expect(aabbContainsPoint(aabb, { x: 15, y: 5 })).toBe(false);
      expect(aabbContainsPoint(aabb, { x: -1, y: 5 })).toBe(false);
    });
  });
});