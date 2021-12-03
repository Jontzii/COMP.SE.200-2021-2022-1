import map from '../src/map';
import { jest } from '@jest/globals';

describe('Map', () => {
  test('should work with a simple numerical operation', () => {
    expect(map([1, 2, 3], (x) => x + 1)).toEqual([2, 3, 4]);
  });
  test('should work with one element array', () => {
    expect(map([1], (x) => x + 1)).toEqual([2]);
  });
  test('should return the array when its empty', () => {
    expect(map([], (x) => x + 1)).toEqual([]);
  });
  test('should not modify the array when the function does nothing', () => {
    expect(map(['a', 'b', 'c'], (x) => x)).toEqual(['a', 'b', 'c']);
  });
  test('should call iteratee with values, index and array correctly', () => {
    const mockIteratee = jest.fn();
    map([1, 2], mockIteratee);

    expect(mockIteratee).toHaveBeenNthCalledWith(1, 1, 0, [1, 2]);
    expect(mockIteratee).toHaveBeenNthCalledWith(2, 2, 1, [1, 2]);
  });
  test('should not call iteratee with empty array', () => {
    const mockIteratee = jest.fn();
    map([], mockIteratee);

    expect(mockIteratee).not.toHaveBeenCalled();
  });
});
