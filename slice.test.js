import slice from './src/slice.js'

test('slices string with start and end', () => {
  expect(slice('abcdef', 1, 4)).toEqual(['b', 'c', 'd'])
})

test('slices string from start index to end', () => {
  expect(slice('abcdef', 2)).toEqual(['c', 'd', 'e', 'f'])
})

test('slices string with negative start', () => {
  expect(slice('abcdef', -2)).toEqual(['e', 'f'])
})

test('slices array with start and end', () => {
  expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3])
})

test('returns empty array when start equals end', () => {
  expect(slice('abc', 1, 1)).toEqual([])
})