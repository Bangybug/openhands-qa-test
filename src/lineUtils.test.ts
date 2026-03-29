import { lineLength, lineMidpoint, lineAngle, pointOnLine, createLine, lineSlope, lineYIntercept } from './lineUtils';

describe('lineUtils', () => {
  describe('createLine', () => {
    it('should create a line from coordinates', () => {
      const line = createLine(0, 0, 3, 4);
      expect(line.start.x).toBe(0);
      expect(line.start.y).toBe(0);
      expect(line.end.x).toBe(3);
      expect(line.end.y).toBe(4);
    });
  });

  describe('lineLength', () => {
    it('should calculate length of a line', () => {
      const line = createLine(0, 0, 3, 4);
      expect(lineLength(line)).toBe(5);
    });

    it('should return 0 for degenerate line', () => {
      const line = createLine(0, 0, 0, 0);
      expect(lineLength(line)).toBe(0);
    });
  });

  describe('lineMidpoint', () => {
    it('should find midpoint of a line', () => {
      const line = createLine(0, 0, 10, 10);
      const midpoint = lineMidpoint(line);
      expect(midpoint.x).toBe(5);
      expect(midpoint.y).toBe(5);
    });
  });

  describe('lineAngle', () => {
    it('should calculate angle of a horizontal line', () => {
      const line = createLine(0, 0, 10, 0);
      const angle = lineAngle(line);
      expect(angle).toBeCloseTo(0, 5);
    });

    it('should calculate angle of a vertical line', () => {
      const line = createLine(0, 0, 0, 10);
      const angle = lineAngle(line);
      expect(angle).toBeCloseTo(Math.PI / 2, 5);
    });
  });

  describe('pointOnLine', () => {
    it('should return start point at t=0', () => {
      const line = createLine(0, 0, 10, 10);
      const point = pointOnLine(line, 0);
      expect(point.x).toBe(0);
      expect(point.y).toBe(0);
    });

    it('should return end point at t=1', () => {
      const line = createLine(0, 0, 10, 10);
      const point = pointOnLine(line, 1);
      expect(point.x).toBe(10);
      expect(point.y).toBe(10);
    });

    it('should return midpoint at t=0.5', () => {
      const line = createLine(0, 0, 10, 10);
      const point = pointOnLine(line, 0.5);
      expect(point.x).toBe(5);
      expect(point.y).toBe(5);
    });
  });

  describe('lineSlope', () => {
    it('should calculate slope of a line', () => {
      const line = createLine(0, 0, 10, 10);
      expect(lineSlope(line)).toBe(1);
    });

    it('should return null for vertical line', () => {
      const line = createLine(0, 0, 0, 10);
      expect(lineSlope(line)).toBeNull();
    });
  });

  describe('lineYIntercept', () => {
    it('should calculate y-intercept', () => {
      const line = createLine(0, 5, 10, 15);
      const intercept = lineYIntercept(line);
      expect(intercept).toBe(5);
    });

    it('should return null for vertical line', () => {
      const line = createLine(0, 0, 0, 10);
      expect(lineYIntercept(line)).toBeNull();
    });
  });
});