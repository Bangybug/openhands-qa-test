export function createCircle(centerX: number, centerY: number, radius: number) {
  return {
    center: { x: centerX, y: centerY },
    radius
  };
}

export function circleArea(circle: { center: { x: number; y: number }; radius: number }): number {
  return Math.PI * circle.radius * circle.radius;
}

export function circleCircumference(circle: { center: { x: number; y: number }; radius: number }): number {
  return 2 * Math.PI * circle.radius;
}

export function expandCircle(circle: { center: { x: number; y: number }; radius: number }, amount: number) {
  return {
    center: circle.center,
    radius: circle.radius + amount
  };
}

export function circleContainsPoint(circle: { center: { x: number; y: number }; radius: number }, point: { x: number; y: number }): boolean {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return dx * dx + dy * dy <= circle.radius * circle.radius;
}

export function circlePointDistance(circle: { center: { x: number; y: number }; radius: number }, point: { x: number; y: number }): number {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return Math.sqrt(dx * dx + dy * dy);
}