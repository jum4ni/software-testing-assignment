import upperFirst from './src/upperFirst.js'

test('uppercases first character', () => {
  expect(upperFirst('hello')).toBe('Hello')
})

test('handles empty string', () => {
  expect(upperFirst('')).toBe('')
})