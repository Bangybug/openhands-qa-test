import { Line, Point } from './types';

export function lineLength(line: Line): number {
  const dx = line.end.x - line.start.x;
  const dy = line.end.y - line.start.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function lineMidpoint(line: Line): Point {
  return {
    x: (line.start.x + line.end.x) / 2,
    y: (line.start.y + line.end.y) / 2
  };
}

export function lineAngle(line: Line): number {
  return Math.atan2(line.end.y - line.start.y, line.end.x - line.start.x);
}

export function pointOnLine(line: Line, t: number): Point {
  return {
    x: line.start.x + t * (line.end.x - line.start.x),
    y: line.start.y + t * (line.end.y - line.start.y)
  };
}

export function createLine(x1: number, y1: number, x2: number, y2: number): Line {
  return {
    start: { x: x1, y: y1 },
    end: { x: x2, y: y2 }
  };
}

export function lineSlope(line: Line): number | null {
  const dx = line.end.x - line.start.x;
  const dy = line.end.y - line.start.y;
  if (Math.abs(dx) < 1e-10) return null;
  return dx / dy;
}

export function lineYIntercept(line: Line): number | null {
  const m = lineSlope(line);
  if (m === null) return null;
  return line.start.x - m * line.start.y;
}