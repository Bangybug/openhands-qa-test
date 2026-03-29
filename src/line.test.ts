import { lineLineIntersection, distance } from './line';

describe('lineLineIntersection', () => {
  it('should find intersection of two crossing lines', () => {
    const line1 = {
      start: { x: 0, y: 0 },
      end: { x: 10, y: 10 }
    };
    const line2 = {
      start: { x: 0, y: 10 },
      end: { x: 10, y: 0 }
    };
    const result = lineLineIntersection(line1, line2);
    expect(result).not.toBeNull();
    expect(result!.x).toBeCloseTo(5, 5);
    expect(result!.y).toBeCloseTo(5, 5);
  });

  it('should return null for parallel lines', () => {
    const line1 = {
      start: { x: 0, y: 0 },
      end: { x: 10, y: 0 }
    };
    const line2 = {
      start: { x: 0, y: 5 },
      end: { x: 10, y: 5 }
    };
    expect(lineLineIntersection(line1, line2)).toBeNull();
  });

  it('should find intersection at endpoint', () => {
    const line1 = {
      start: { x: 0, y: 0 },
      end: { x: 5, y: 5 }
    };
    const line2 = {
      start: { x: 5, y: 5 },
      end: { x: 10, y: 0 }
    };
    const result = lineLineIntersection(line1, line2);
    expect(result).not.toBeNull();
    expect(result!.x).toBe(5);
    expect(result!.y).toBe(5);
  });
});

describe('distance', () => {
  it('should calculate distance between two points', () => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 3, y: 4 };
    expect(distance(p1, p2)).toBeCloseTo(5, 5);
  });

  it('should return 0 for same points', () => {
    const p = { x: 5, y: 5 };
    expect(distance(p, p)).toBe(0);
  });
});