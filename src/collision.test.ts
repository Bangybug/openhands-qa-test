import { aabbAABBCollision, circleCircleCollision, aabbCircleCollision } from './collision';

describe('collision', () => {
  describe('aabbAABBCollision', () => {
    it('should detect collision between overlapping boxes', () => {
      const a = { min: { x: 0, y: 0 }, max: { x: 10, y: 10 } };
      const b = { min: { x: 5, y: 5 }, max: { x: 15, y: 15 } };
      expect(aabbAABBCollision(a, b)).toBe(true);
    });

    it('should detect no collision for separated boxes', () => {
      const a = { min: { x: 0, y: 0 }, max: { x: 10, y: 10 } };
      const b = { min: { x: 20, y: 20 }, max: { x: 30, y: 30 } };
      expect(aabbAABBCollision(a, b)).toBe(false);
    });

    it('should detect collision at edge touching', () => {
      const a = { min: { x: 0, y: 0 }, max: { x: 10, y: 10 } };
      const b = { min: { x: 10, y: 0 }, max: { x: 20, y: 10 } };
      expect(aabbAABBCollision(a, b)).toBe(true);
    });
  });

  describe('circleCircleCollision', () => {
    it('should detect collision for overlapping circles', () => {
      const a = { center: { x: 0, y: 0 }, radius: 5 };
      const b = { center: { x: 8, y: 0 }, radius: 5 };
      expect(circleCircleCollision(a, b)).toBe(true);
    });

    it('should detect no collision for separated circles', () => {
      const a = { center: { x: 0, y: 0 }, radius: 3 };
      const b = { center: { x: 10, y: 0 }, radius: 3 };
      expect(circleCircleCollision(a, b)).toBe(false);
    });

    it('should detect collision for touching circles', () => {
      const a = { center: { x: 0, y: 0 }, radius: 5 };
      const b = { center: { x: 10, y: 0 }, radius: 5 };
      expect(circleCircleCollision(a, b)).toBe(true);
    });
  });

  describe('aabbCircleCollision', () => {
    it('should detect collision for circle inside box', () => {
      const aabb = { min: { x: 0, y: 0 }, max: { x: 20, y: 20 } };
      const circle = { center: { x: 10, y: 10 }, radius: 5 };
      expect(aabbCircleCollision(aabb, circle)).toBe(true);
    });

    it('should detect collision for circle intersecting box', () => {
      const aabb = { min: { x: 0, y: 0 }, max: { x: 10, y: 10 } };
      const circle = { center: { x: 15, y: 5 }, radius: 8 };
      expect(aabbCircleCollision(aabb, circle)).toBe(true);
    });

    it('should detect no collision for circle far from box', () => {
      const aabb = { min: { x: 0, y: 0 }, max: { x: 10, y: 10 } };
      const circle = { center: { x: 30, y: 30 }, radius: 5 };
      expect(aabbCircleCollision(aabb, circle)).toBe(false);
    });
  });
});