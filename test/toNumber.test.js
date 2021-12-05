import toNumber from '../src/toNumber'

describe('toNumber', () => {
  test('Should return given number', () => {
    expect(toNumber(9)).toEqual(9)
  })

  test('Should convert number object to number', () => {
    expect(toNumber(new Number(0))).toEqual(0)
  })

  test('Should convert string to number', () => {
    expect(toNumber('12')).toEqual(12)
  })

  test('Should convert string object to number', () => {
    expect(toNumber(new String('12'))).toEqual(12)
  })

  test('Should return infinity', () => {
    expect(toNumber(Infinity)).toEqual(Infinity)
  })

  test('Should return negative infinity', () => {
    expect(toNumber(-Infinity)).toEqual(-Infinity)
  })

  test('Should return number min value', () => {
    expect(toNumber(Number.MIN_VALUE)).toEqual(5.00E-324)
  })

  test('Should return number max value', () => {
    expect(toNumber(Number.MAX_VALUE)).toEqual(1.7976931348623157E+308)
  })

  test('Should return NaN when given null', () => {
    expect(toNumber(null)).toEqual(NaN)
  })

  test('Should return NaN when given undefined', () => {
    expect(toNumber(undefined)).toEqual(NaN)
  })

  test('Should return NaN when given Symbol', () => {
    expect(toNumber(Symbol())).toEqual(NaN)
  })
})
