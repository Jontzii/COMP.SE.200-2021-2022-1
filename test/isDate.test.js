import isDate from '../src/isDate'

describe('isDate', () => {
  test('Should return true when given a new date', () => {
    expect(isDate(new Date())).toEqual(true)
  })

  test('Should return false when given a string date', () => {
    expect(isDate('30/11/2021')).toEqual(false)
  })

  test('Should return false when given a unix ms time', () => {
    expect(isDate(1638296020)).toEqual(false)
  })
})
