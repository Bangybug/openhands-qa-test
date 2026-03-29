import { degToRad, radToDeg, clamp, lerp, smoothstep, mapRange, sign, almostEqual } from './mathUtils';

describe('mathUtils', () => {
  describe('degToRad', () => {
    it('should convert degrees to radians', () => {
      expect(degToRad(180)).toBeCloseTo(Math.PI, 10);
      expect(degToRad(90)).toBeCloseTo(Math.PI / 2, 10);
    });
  });

  describe('radToDeg', () => {
    it('should convert radians to degrees', () => {
      expect(radToDeg(Math.PI)).toBeCloseTo(180, 10);
      expect(radToDeg(Math.PI / 2)).toBeCloseTo(90, 10);
    });
  });

  describe('clamp', () => {
    it('should clamp value to range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(15, 0, 10)).toBe(10);
    });
  });

  describe('lerp', () => {
    it('should linearly interpolate', () => {
      expect(lerp(0, 10, 0.5)).toBe(5);
      expect(lerp(0, 10, 0)).toBe(0);
      expect(lerp(0, 10, 1)).toBe(10);
    });
  });

  describe('smoothstep', () => {
    it('should apply smoothstep function', () => {
      expect(smoothstep(0, 1, 0)).toBeCloseTo(0, 5);
      expect(smoothstep(0, 1, 1)).toBeCloseTo(1, 5);
      expect(smoothstep(0, 1, 0.5)).toBeCloseTo(0.5, 5);
    });
  });

  describe('mapRange', () => {
    it('should map value from one range to another', () => {
      expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
      expect(mapRange(0, 0, 10, 0, 100)).toBe(0);
      expect(mapRange(10, 0, 10, 0, 100)).toBe(100);
    });
  });

  describe('sign', () => {
    it('should return correct sign', () => {
      expect(sign(5)).toBe(1);
      expect(sign(-5)).toBe(-1);
      expect(sign(0)).toBe(0);
    });
  });

  describe('almostEqual', () => {
    it('should compare numbers within epsilon', () => {
      expect(almostEqual(1.0, 1.0)).toBe(true);
      expect(almostEqual(1.01, 1.0, 0.1)).toBe(true);
      expect(almostEqual(1.1, 1.0, 0.05)).toBe(false);
    });
  });
});