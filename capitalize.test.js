import capitalize from './src/capitalize.js'

test('capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test('handles already capitalized word', () => {
  expect(capitalize('Hello')).toBe('Hello')
})

test('handles empty string', () => {
  expect(capitalize('')).toBe('')
})