import toString from './src/toString.js'

test('converts number to string', () => {
  expect(toString(5)).toBe('5')
})

test('converts string to string', () => {
  expect(toString('abc')).toBe('abc')
})

test('handles undefined value', () => {
  expect(toString(undefined)).toBe('undefined')
})

test('converts array to string', () => {
  expect(toString([1, 2, 3])).toBe('1,2,3')
})

test('handles negative zero', () => {
  expect(toString(-0)).toBe('-0')
})