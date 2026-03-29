import { createCircle, circleArea, circleCircumference, expandCircle, circleContainsPoint, circlePointDistance } from './circleUtils';

describe('circleUtils', () => {
  describe('createCircle', () => {
    it('should create a circle from coordinates', () => {
      const circle = createCircle(5, 10, 3);
      expect(circle.center.x).toBe(5);
      expect(circle.center.y).toBe(10);
      expect(circle.radius).toBe(3);
    });
  });

  describe('circleArea', () => {
    it('should calculate area of a circle', () => {
      const circle = createCircle(0, 0, 1);
      const area = circleArea(circle);
      expect(area).toBeCloseTo(Math.PI, 5);
    });

    it('should return 0 for radius 0', () => {
      const circle = createCircle(0, 0, 0);
      expect(circleArea(circle)).toBe(0);
    });
  });

  describe('circleCircumference', () => {
    it('should calculate circumference of a circle', () => {
      const circle = createCircle(0, 0, 1);
      const circumference = circleCircumference(circle);
      expect(circumference).toBeCloseTo(2 * Math.PI, 5);
    });
  });

  describe('expandCircle', () => {
    it('should expand circle by amount', () => {
      const circle = createCircle(0, 0, 5);
      const expanded = expandCircle(circle, 2);
      expect(expanded.radius).toBe(7);
      expect(expanded.center.x).toBe(0);
      expect(expanded.center.y).toBe(0);
    });
  });

  describe('circleContainsPoint', () => {
    it('should return true for point inside circle', () => {
      const circle = createCircle(0, 0, 5);
      expect(circleContainsPoint(circle, { x: 0, y: 0 })).toBe(true);
      expect(circleContainsPoint(circle, { x: 3, y: 3 })).toBe(true);
    });

    it('should return true for point on boundary', () => {
      const circle = createCircle(0, 0, 5);
      expect(circleContainsPoint(circle, { x: 5, y: 0 })).toBe(true);
    });

    it('should return false for point outside circle', () => {
      const circle = createCircle(0, 0, 5);
      expect(circleContainsPoint(circle, { x: 10, y: 0 })).toBe(false);
    });
  });

  describe('circlePointDistance', () => {
    it('should calculate distance from center to point', () => {
      const circle = createCircle(0, 0, 5);
      const dist = circlePointDistance(circle, { x: 3, y: 4 });
      expect(dist).toBeCloseTo(5, 5);
    });

    it('should return 0 for point at center', () => {
      const circle = createCircle(0, 0, 5);
      expect(circlePointDistance(circle, { x: 0, y: 0 })).toBe(0);
    });
  });
});