import add from '../src/add';

describe('Add', function () {
  test('should work with integers', () => {
    expect(add(1, 2)).toBe(3);
  });
  test('should work with decimals', () => {
    expect(add(0.1, 0.2)).toBe(0.3);
  });
  test('should work with negative augend', () => {
    expect(add(-1, 2)).toBe(1);
  });
  test('should work with negative addend', () => {
    expect(add(1, -2)).toBe(-1);
  });
  test('should return addend with 0 augend', () => {
    expect(add(1, 0)).toBe(1);
  });
  test('should return augend with 0 addend', () => {
    expect(add(0, 1)).toBe(1);
  });
  test('should throw error with undefined augend', () => {
    expect(() => add(undefined, 1)).toThrowError();
  });
  test('should throw error with undefined addend', () => {
    expect(() => add(1, undefined)).toThrowError();
  });
});
