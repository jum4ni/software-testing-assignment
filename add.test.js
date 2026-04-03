import add from './src/add.js'

// Testataan normaali yhteenlasku
test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5)
})

// Testataan negatiivisten lukujen yhteenlasku
test('adds negative numbers', () => {
  expect(add(-2, -3)).toBe(-5)
})

// Testataan nollan käsittely
test('adds zero correctly', () => {
  expect(add(5, 0)).toBe(5)
})

// Testataan positiivisten ja negatiivisen luvun yhteenlasku
test('adds positive and negative number', () => {
  expect(add(5, -3)).toBe(2)
})
