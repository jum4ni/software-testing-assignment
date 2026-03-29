import toString from './src/toString.js'

test('converts number to string', () => {
  expect(toString(123)).toBe('123')
})

test('handles string input', () => {
  expect(toString('abc')).toBe('abc')
})

test('handles null value', () => {
  expect(toString(null)).toBe('null')
})