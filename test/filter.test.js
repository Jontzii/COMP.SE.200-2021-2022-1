import filter from '../src/filter';
import { jest } from '@jest/globals';

describe('Filter', () => {
  test('should result in empty array if predicate always negative', () => {
    expect(filter([1, 2, 3], () => false)).toHaveLength(0);
  });
  test('should result in empty array if array is empty', () => {
    expect(filter([], () => true)).toHaveLength(0);
  });
  test('should result in original array if predicate always positive', () => {
    expect(filter([1, 2, 3], () => true)).toEqual([1, 2, 3]);
  });
  test('Should work with truthy values', () => {
    expect(filter([1, 2, 3], () => 'string')).toEqual([1, 2, 3]);
  });
  test('should correctly filter elements', () => {
    const mockPredicate = jest.fn()
      .mockReturnValueOnce(false)
      .mockReturnValue(true);

    expect(filter([1, 2, 3], mockPredicate)).toEqual([2, 3]);
  });
  test('should call predicate with values, index and array correctly', () => {
    const mockPredicate = jest.fn();
    filter([1, 2], mockPredicate);

    expect(mockPredicate).toHaveBeenNthCalledWith(1, 1, 0, [1, 2]);
    expect(mockPredicate).toHaveBeenNthCalledWith(2, 2, 1, [1, 2]);
  });
  test('should not call predicate with empty array', () => {
    const mockPredicate = jest.fn();
    filter([], mockPredicate);

    expect(mockPredicate).not.toHaveBeenCalled();
  });
});
