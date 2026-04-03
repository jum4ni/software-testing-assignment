import upperFirst from './src/upperFirst.js'

// Testataan että ensimmäinen  merkki muutetaan isoksi
test('uppercases first character', () => {
  expect(upperFirst('hello')).toBe('Hello')
})

// Testataan tyhjä merkkijono (reunatapaus)
test('handles empty string', () => {
  expect(upperFirst('')).toBe('')
})
