import { lineTriangleIntersection } from './triangle';
import { Triangle } from './types';

describe('lineTriangleIntersection', () => {
  it('should find intersection when line crosses triangle', () => {
    const line = {
      start: { x: -10, y: 0 },
      end: { x: 10, y: 10 }
    };
    const triangle: Triangle = {
      vertices: [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 0, y: 10 }
      ]
    };
    const result = lineTriangleIntersection(line, triangle);
    expect(result.intersects).toBe(true);
    expect(result.points).toBeDefined();
  });

  it('should return false when line does not intersect triangle', () => {
    const line = {
      start: { x: 20, y: 20 },
      end: { x: 30, y: 30 }
    };
    const triangle: Triangle = {
      vertices: [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 0, y: 10 }
      ]
    };
    const result = lineTriangleIntersection(line, triangle);
    expect(result.intersects).toBe(false);
  });

  it('should find intersection through right triangle', () => {
    const line = {
      start: { x: -5, y: 5 },
      end: { x: 5, y: 15 }
    };
    const triangle: Triangle = {
      vertices: [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 0, y: 10 }
      ]
    };
    const result = lineTriangleIntersection(line, triangle);
    expect(result.intersects).toBe(true);
  });

  it('should handle angled line through right triangle', () => {
    const line = {
      start: { x: -5, y: 0 },
      end: { x: 5, y: 10 }
    };
    const triangle: Triangle = {
      vertices: [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 0, y: 10 }
      ]
    };
    const result = lineTriangleIntersection(line, triangle);
    expect(result.intersects).toBe(true);
  });

  it('should find intersection with slanted triangle', () => {
    const line = {
      start: { x: -5, y: 0 },
      end: { x: 5, y: 10 }
    };
    const triangle: Triangle = {
      vertices: [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 5, y: 10 }
      ]
    };
    const result = lineTriangleIntersection(line, triangle);
    expect(result.intersects).toBe(true);
  });
});