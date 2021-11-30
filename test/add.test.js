import add from '../src/add'

describe('Add', function () {
  test('should add', function () {
    expect(add(1, 2)).toBe(3);
  });
});
