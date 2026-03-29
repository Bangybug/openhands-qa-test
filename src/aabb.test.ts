import { lineAABBIntersection } from './aabb';

describe('lineAABBIntersection', () => {
  it('should find intersection when line crosses aabb', () => {
    const line = {
      start: { x: 0, y: 5 },
      end: { x: 10, y: 5 }
    };
    const aabb = {
      min: { x: 2, y: 0 },
      max: { x: 8, y: 10 }
    };
    const result = lineAABBIntersection(line, aabb);
    expect(result.intersects).toBe(true);
    expect(result.points).toBeDefined();
    expect(result.points!.length).toBe(1);
    expect(result.points![0].x).toBeCloseTo(2, 5);
    expect(result.points![0].y).toBe(5);
  });

  it('should return false when line does not cross aabb', () => {
    const line = {
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 }
    };
    const aabb = {
      min: { x: 5, y: 5 },
      max: { x: 10, y: 10 }
    };
    const result = lineAABBIntersection(line, aabb);
    expect(result.intersects).toBe(false);
  });

  it('should find intersection at line endpoint', () => {
    const line = {
      start: { x: 2, y: 5 },
      end: { x: 10, y: 5 }
    };
    const aabb = {
      min: { x: 2, y: 0 },
      max: { x: 8, y: 10 }
    };
    const result = lineAABBIntersection(line, aabb);
    expect(result.intersects).toBe(true);
    expect(result.points![0].x).toBeCloseTo(2, 5);
  });

  it('should find intersections for line passing through corner', () => {
    const line = {
      start: { x: 0, y: 0 },
      end: { x: 10, y: 10 }
    };
    const aabb = {
      min: { x: 5, y: 5 },
      max: { x: 8, y: 8 }
    };
    const result = lineAABBIntersection(line, aabb);
    expect(result.intersects).toBe(true);
    expect(result.points).toBeDefined();
  });

  it('should handle vertical line intersecting aabb', () => {
    const line = {
      start: { x: 5, y: 0 },
      end: { x: 5, y: 10 }
    };
    const aabb = {
      min: { x: 0, y: 2 },
      max: { x: 10, y: 8 }
    };
    const result = lineAABBIntersection(line, aabb);
    expect(result.intersects).toBe(true);
    expect(result.points![0].y).toBeCloseTo(2, 5);
  });
});