import chunk from '../src/chunk';

describe('Chunk', () => {
  test('should produce empty array with empty array', () => {
    expect(chunk([])).toHaveLength(0);
  });
  test('should produce empty array with empty array and larger size', () => {
    expect(chunk([], 4)).toHaveLength(0);
  });
  test('should evenly chunk correct array', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2))
    .toEqual([[1, 2], [3, 4], [5, 6]]);
  });
  test('should leave extra element in its own chunk', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 2))
    .toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  });
  test('should by default seperate array into one sized chunks', () => {
    expect([1, 2, 3, 4]).toEqual([[1], [2], [3], [4]]);
  });
  test('should throw error with undefined array', () => {
    expect(() => chunk()).toThrowError();
  });
});
