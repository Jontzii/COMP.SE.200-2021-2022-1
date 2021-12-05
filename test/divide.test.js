import divide from '../src/divide';

describe('Divide', () => {
  test('should return 0 when dividend is zero', () => {
    expect(divide(0, 66)).toBe(0);
  });
  test('should divide correctly with integers', () => {
    expect(divide(1, 2)).toBeCloseTo(0.5, 5);
  });
  test('should divide correctly with decimals', () => {
    expect(divide(5.5, 2.5)).toBeCloseTo(2.2, 5);
  });
  test('Should work with negative divisor', () => {
    expect(divide(4, -2)).toBeCloseTo(-2, 5);
  });
  test('Should work with negative dividend', () => {
    expect(divide(-4, 2)).toBeCloseTo(-2, 5);
  });
  test('should throw error when divisor is undefined', () => {
    expect(() => divide(1)).toThrowError();
  });
  test('should throw error when dividend is undefined', () => {
    expect(() => divide(undefined, 1)).toThrowError();
  });
  test('should throw error with zero divisor', () => {
    expect(() => divide(1, 0)).toThrowError();
  });
});
