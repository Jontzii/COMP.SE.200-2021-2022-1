import isArrayLike from '../src/isArrayLike'

describe('isArrayLike', () => {
  test('Should return true when given array of numbers', () => {
    expect(isArrayLike([1,4,2])).toEqual(true)
  })

  test('Should return true when given a string', () => {
    expect(isArrayLike('example')).toEqual(true)
  })

  test('Should return false when given a function', () => {
    expect(isArrayLike(() => { /* Do stuff */ })).toEqual(false)
  })

  test('Should return false when given a object without length', () => {
    expect(isArrayLike({ a: 'a', b: 'b' })).toEqual(false)
  })
})
