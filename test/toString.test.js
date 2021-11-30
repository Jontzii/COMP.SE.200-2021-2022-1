import toString from '../src/toString'

describe('toString', () => {
  test('Should return the given string', () => {
    expect(toString('abc')).toEqual('abc')
  })

  // This is not according to specification?
  /*
  test('Should return empty string when null is given', () => {
    expect(toString(null)).toEqual('')
  })

  test('Should return empty string when undefined is given', () => {
    expect(toString(undefined)).toEqual('')
  })
  */

  test('Should return "null" string when null is given', () => {
    expect(toString(null)).toEqual('null')
  })

  test('Should return "undefined" string when undefined is given', () => {
    expect(toString(undefined)).toEqual('undefined')
  })

  test('Should return "0" when given 0', () => {
    expect(toString(0)).toEqual('0')
  })

  test('Should return "-0" when given -0', () => {
    expect(toString(-0)).toEqual('-0')
  })

  test('Should return given number as string', () => {
    expect(toString(12)).toEqual('12')
  })

  test('Should return array of numbers as a string', () => {
    expect(toString([1, 2, 3])).toEqual('1,2,3')
  })

  test('Should return null for null value in array', () => {
    expect(toString(['a', null, 'c'])).toEqual('a,,c')
  })

  test('Should return the value given by toString of a symbol', () => {
    expect(toString(Symbol('abc'))).toEqual('Symbol(abc)')
  })
})
