import { triangleArea, trianglePerimeter, triangleCentroid, triangleContainsPoint, createTriangle } from './triangleUtils';

describe('triangleUtils', () => {
  describe('createTriangle', () => {
    it('should create a triangle from coordinates', () => {
      const triangle = createTriangle(0, 0, 10, 0, 5, 10);
      expect(triangle.vertices[0].x).toBe(0);
      expect(triangle.vertices[0].y).toBe(0);
      expect(triangle.vertices[1].x).toBe(10);
      expect(triangle.vertices[1].y).toBe(0);
      expect(triangle.vertices[2].x).toBe(5);
      expect(triangle.vertices[2].y).toBe(10);
    });
  });

  describe('triangleArea', () => {
    it('should calculate area of right triangle', () => {
      const triangle = createTriangle(0, 0, 10, 0, 0, 10);
      const area = triangleArea(triangle);
      expect(area).toBe(50);
    });

    it('should return 0 for degenerate triangle', () => {
      const triangle = createTriangle(0, 0, 5, 5, 10, 10);
      const area = triangleArea(triangle);
      expect(area).toBe(0);
    });
  });

  describe('trianglePerimeter', () => {
    it('should calculate perimeter of triangle', () => {
      const triangle = createTriangle(0, 0, 3, 0, 0, 4);
      const perimeter = trianglePerimeter(triangle);
      expect(perimeter).toBe(12);
    });
  });

  describe('triangleCentroid', () => {
    it('should calculate centroid of triangle', () => {
      const triangle = createTriangle(0, 0, 6, 0, 0, 6);
      const centroid = triangleCentroid(triangle);
      expect(centroid.x).toBe(2);
      expect(centroid.y).toBe(2);
    });

    it('should handle negative coordinates', () => {
      const triangle = createTriangle(-3, -3, 3, -3, 0, 3);
      const centroid = triangleCentroid(triangle);
      expect(centroid.x).toBe(0);
      expect(centroid.y).toBe(-1);
    });
  });

  describe('triangleContainsPoint', () => {
    it('should return true for point inside triangle', () => {
      const triangle = createTriangle(0, 0, 10, 0, 0, 10);
      expect(triangleContainsPoint(triangle, { x: 2, y: 2 })).toBe(true);
    });

    it('should return true for point on edge', () => {
      const triangle = createTriangle(0, 0, 10, 0, 0, 10);
      expect(triangleContainsPoint(triangle, { x: 5, y: 0 })).toBe(true);
    });

    it('should return true for vertex', () => {
      const triangle = createTriangle(0, 0, 10, 0, 0, 10);
      expect(triangleContainsPoint(triangle, { x: 0, y: 0 })).toBe(true);
    });

    it('should return false for point outside triangle', () => {
      const triangle = createTriangle(0, 0, 10, 0, 0, 10);
      expect(triangleContainsPoint(triangle, { x: 10, y: 5 })).toBe(false);
      expect(triangleContainsPoint(triangle, { x: -1, y: 5 })).toBe(false);
    });
  });
});