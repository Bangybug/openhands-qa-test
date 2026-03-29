import { translatePoint, scalePoint, rotatePoint, reflectPoint, distance, midpoint } from './transform';

describe('transform', () => {
  describe('translatePoint', () => {
    it('should translate a point', () => {
      const result = translatePoint({ x: 5, y: 10 }, 3, 4);
      expect(result.x).toBe(8);
      expect(result.y).toBe(14);
    });
  });

  describe('scalePoint', () => {
    it('should scale a point from origin', () => {
      const result = scalePoint({ x: 10, y: 20 }, 2);
      expect(result.x).toBe(20);
      expect(result.y).toBe(40);
    });

    it('should scale a point from custom origin', () => {
      const result = scalePoint({ x: 10, y: 10 }, 2, { x: 5, y: 5 });
      expect(result.x).toBe(15);
      expect(result.y).toBe(15);
    });
  });

  describe('rotatePoint', () => {
    it('should rotate a point 90 degrees around origin', () => {
      const result = rotatePoint({ x: 1, y: 0 }, Math.PI / 2);
      expect(result.x).toBeCloseTo(0, 5);
      expect(result.y).toBeCloseTo(1, 5);
    });

    it('should rotate a point 90 degrees around custom origin', () => {
      const result = rotatePoint({ x: 2, y: 2 }, Math.PI / 2, { x: 1, y: 1 });
      expect(result.x).toBeCloseTo(0, 5);
      expect(result.y).toBeCloseTo(2, 5);
    });
  });

  describe('reflectPoint', () => {
    it('should reflect point across x-axis', () => {
      const result = reflectPoint({ x: 5, y: 10 }, 'x', 0);
      expect(result.x).toBe(-5);
      expect(result.y).toBe(10);
    });

    it('should reflect point across y-axis', () => {
      const result = reflectPoint({ x: 5, y: 10 }, 'y', 0);
      expect(result.x).toBe(5);
      expect(result.y).toBe(-10);
    });

    it('should reflect point across origin', () => {
      const result = reflectPoint({ x: 5, y: 10 }, 'origin', 0);
      expect(result.x).toBe(-5);
      expect(result.y).toBe(-10);
    });
  });

  describe('distance', () => {
    it('should calculate distance between two points', () => {
      const result = distance({ x: 0, y: 0 }, { x: 3, y: 4 });
      expect(result).toBe(5);
    });

    it('should return 0 for same point', () => {
      const result = distance({ x: 5, y: 5 }, { x: 5, y: 5 });
      expect(result).toBe(0);
    });
  });

  describe('midpoint', () => {
    it('should find midpoint between two points', () => {
      const result = midpoint({ x: 0, y: 0 }, { x: 10, y: 10 });
      expect(result.x).toBe(5);
      expect(result.y).toBe(5);
    });

    it('should handle negative coordinates', () => {
      const result = midpoint({ x: -5, y: -5 }, { x: 5, y: 5 });
      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
    });
  });
});