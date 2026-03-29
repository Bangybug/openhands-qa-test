import { add, subtract, scale, dot, cross, magnitude, normalize, lerp } from './point';

describe('point utilities', () => {
  describe('add', () => {
    it('should add two points', () => {
      const result = add({ x: 1, y: 2 }, { x: 3, y: 4 });
      expect(result.x).toBe(4);
      expect(result.y).toBe(6);
    });
  });

  describe('subtract', () => {
    it('should subtract two points', () => {
      const result = subtract({ x: 5, y: 7 }, { x: 2, y: 3 });
      expect(result.x).toBe(3);
      expect(result.y).toBe(4);
    });
  });

  describe('scale', () => {
    it('should scale a point', () => {
      const result = scale({ x: 2, y: 3 }, 2);
      expect(result.x).toBe(4);
      expect(result.y).toBe(6);
    });
  });

  describe('dot', () => {
    it('should compute dot product', () => {
      const result = dot({ x: 1, y: 2 }, { x: 3, y: 4 });
      expect(result).toBe(11);
    });
  });

  describe('cross', () => {
    it('should compute cross product', () => {
      const result = cross({ x: 1, y: 2 }, { x: 3, y: 4 });
      expect(result).toBe(-2);
    });
  });

  describe('magnitude', () => {
    it('should compute magnitude', () => {
      const result = magnitude({ x: 3, y: 4 });
      expect(result).toBe(5);
    });

    it('should return 0 for zero point', () => {
      const result = magnitude({ x: 0, y: 0 });
      expect(result).toBe(0);
    });
  });

  describe('normalize', () => {
    it('should normalize a point', () => {
      const result = normalize({ x: 3, y: 4 });
      expect(result.x).toBeCloseTo(0.6, 5);
      expect(result.y).toBeCloseTo(0.8, 5);
    });

    it('should handle zero point', () => {
      const result = normalize({ x: 0, y: 0 });
      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
    });
  });

  describe('lerp', () => {
    it('should linearly interpolate between points', () => {
      const result = lerp({ x: 0, y: 0 }, { x: 10, y: 10 }, 0.5);
      expect(result.x).toBe(5);
      expect(result.y).toBe(5);
    });

    it('should return start at t=0', () => {
      const result = lerp({ x: 1, y: 2 }, { x: 10, y: 20 }, 0);
      expect(result.x).toBe(1);
      expect(result.y).toBe(2);
    });

    it('should return end at t=1', () => {
      const result = lerp({ x: 1, y: 2 }, { x: 10, y: 20 }, 1);
      expect(result.x).toBe(10);
      expect(result.y).toBe(20);
    });
  });
});