import toString from './src/toString.js'

// Testaan numeron muuntaminen merkkijonoksi
test('converts number to string', () => {
  expect(toString(5)).toBe('5')
})

// Testaan että merkkijono pysyy samana
test('converts string to string', () => {
  expect(toString('abc')).toBe('abc')
})

// Testataan endefined- arvon käsittely (reunatapaus)
test('handles undefined value', () => {
  expect(toString(undefined)).toBe('undefined')
})

// Testataan taulukon muuntaminen merkkijonoksi
test('converts array to string', () => {
  expect(toString([1, 2, 3])).toBe('1,2,3')
})

// Testataan negatiivisen nollan käsittely
test('handles negative zero', () => {
  expect(toString(-0)).toBe('-0')
})
