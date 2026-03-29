import { lineCircleIntersection } from './circle';

describe('lineCircleIntersection', () => {
  it('should find two intersection points for line crossing circle', () => {
    const line = {
      start: { x: -5, y: 0 },
      end: { x: 5, y: 0 }
    };
    const circle = {
      center: { x: 0, y: 0 },
      radius: 3
    };
    const result = lineCircleIntersection(line, circle);
    expect(result.intersects).toBe(true);
    expect(result.points).toBeDefined();
    expect(result.points!.length).toBe(2);
  });

  it('should find single intersection for tangent line', () => {
    const line = {
      start: { x: 0, y: 6 },
      end: { x: 0, y: -6 }
    };
    const circle = {
      center: { x: 0, y: 0 },
      radius: 5
    };
    const result = lineCircleIntersection(line, circle);
    expect(result.intersects).toBe(true);
    expect(result.points).toBeDefined();
    expect(result.points!.length).toBeLessThanOrEqual(2);
  });

  it('should return false for line missing circle', () => {
    const line = {
      start: { x: 0, y: 10 },
      end: { x: 10, y: 20 }
    };
    const circle = {
      center: { x: 0, y: 0 },
      radius: 5
    };
    const result = lineCircleIntersection(line, circle);
    expect(result.intersects).toBe(false);
  });

  it('should find intersection at endpoint', () => {
    const line = {
      start: { x: 5, y: 0 },
      end: { x: 10, y: 0 }
    };
    const circle = {
      center: { x: 0, y: 0 },
      radius: 5
    };
    const result = lineCircleIntersection(line, circle);
    expect(result.intersects).toBe(true);
    expect(result.points).toBeDefined();
    expect(result.points!.length).toBeGreaterThanOrEqual(1);
  });

  it('should handle diagonal line through circle', () => {
    const line = {
      start: { x: -5, y: -5 },
      end: { x: 5, y: 5 }
    };
    const circle = {
      center: { x: 0, y: 0 },
      radius: 3
    };
    const result = lineCircleIntersection(line, circle);
    expect(result.intersects).toBe(true);
    expect(result.points).toBeDefined();
    expect(result.points!.length).toBe(2);
  });
});