import { angle, angleBetween, angleFromHorizontal, normalizeAngle, angleDiff } from './angleUtils';

describe('angleUtils', () => {
  describe('angle', () => {
    it('should calculate angle between two points', () => {
      const result = angle({ x: 0, y: 0 }, { x: 1, y: 0 });
      expect(result).toBeCloseTo(0, 5);
    });

    it('should calculate angle for 45 degrees', () => {
      const result = angle({ x: 0, y: 0 }, { x: 1, y: 1 });
      expect(result).toBeCloseTo(Math.PI / 4, 5);
    });
  });

  describe('angleBetween', () => {
    it('should calculate angle between three points', () => {
      const result = angleBetween({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 });
      expect(result).toBeCloseTo(Math.PI / 2, 5);
    });
  });

  describe('angleFromHorizontal', () => {
    it('should calculate angle from horizontal', () => {
      const result = angleFromHorizontal({ x: 0, y: 0 }, { x: 1, y: 0 });
      expect(result).toBeCloseTo(0, 5);
    });

    it('should calculate angle for vertical line', () => {
      const result = angleFromHorizontal({ x: 0, y: 0 }, { x: 0, y: 1 });
      expect(result).toBeCloseTo(Math.PI / 2, 5);
    });
  });

  describe('normalizeAngle', () => {
    it('should normalize angle to 0-2PI range', () => {
      expect(normalizeAngle(3 * Math.PI)).toBeCloseTo(Math.PI, 5);
      expect(normalizeAngle(-Math.PI / 2)).toBeCloseTo(3 * Math.PI / 2, 5);
      expect(normalizeAngle(Math.PI / 4)).toBeCloseTo(Math.PI / 4, 5);
    });
  });

  describe('angleDiff', () => {
    it('should calculate smallest difference between angles', () => {
      expect(Math.abs(angleDiff(0, Math.PI))).toBeCloseTo(Math.PI, 5);
      expect(Math.abs(angleDiff(0, Math.PI / 2))).toBeCloseTo(Math.PI / 2, 5);
      expect(Math.abs(angleDiff(Math.PI, -Math.PI))).toBeCloseTo(0, 5);
    });
  });
});