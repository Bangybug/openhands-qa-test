export interface Point {
  x: number;
  y: number;
}

export interface Line {
  start: Point;
  end: Point;
}

export interface AABB {
  min: Point;
  max: Point;
}

export interface Circle {
  center: Point;
  radius: number;
}

export interface Triangle {
  vertices: [Point, Point, Point];
}

export interface IntersectionResult {
  intersects: boolean;
  points?: Point[];
}