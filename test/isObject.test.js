import isObject from '../src/isObject'

describe('isObject', () => {
  test('Should return true when given object', () => {
    expect(isObject({ a: 'a', b: 'b', c: 'c' })).toEqual(true)
  })

  test('Should return true when given array', () => {
    expect(isObject(['a', 'b', 'c'])).toEqual(true)
  })

  test('Should return true when given function', () => {
    expect(isObject(() => { /* Function stuff */ })).toEqual(true)
  })

  test('Should return true when given regex', () => {
    expect(isObject(/ab+c/)).toEqual(true)
  })

  test('Should return true when given number object', () => {
    expect(isObject(new Number(10))).toEqual(true)
  })

  test('Should return true when given string object', () => {
    expect(isObject(new String('example'))).toEqual(true)
  })

  test('Should return false whne given null', () => {
    expect(isObject(null)).toEqual(false)
  })

  test('Should return false when given number', () => {
    expect(isObject(10)).toEqual(false)
  })

  test('Should return false when given string', () => {
    expect(isObject('example')).toEqual(false)
  })
})
