import capitalize from './src/capitalize.js'

// Testataan että ensimmäinen kirjain muutetaan isoksi
test('capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello')
})

// Testataan tapaus jossa sana on jo valmiiksi isolla
test('handles already capitalized word', () => {
  expect(capitalize('Hello')).toBe('Hello')
})

// Testataan tyhjä merkkijono (reunatapaus)
test('handles empty string', () => {
  expect(capitalize('')).toBe('')
})
