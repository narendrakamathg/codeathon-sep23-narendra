// BEGIN: 7f8d6a4b9jw3
test('sortStringByFrequency should sort characters by frequency in descending order', () => {
  expect(sortStringByFrequency('hello world')).toBe('lllooehwrd');
  expect(sortStringByFrequency('tree')).toBe('eert');
});

test('sortStringByFrequency should handle empty strings', () => {
  expect(sortStringByFrequency('')).toBe('');
});

test('sortStringByFrequency should handle strings with only one character', () => {
  expect(sortStringByFrequency('a')).toBe('a');
});

test('sortStringByFrequency should handle strings with repeated characters', () => {
  expect(sortStringByFrequency('aaabbbccc')).toBe('aaabbbccc');
});

test('sortStringByFrequency should handle strings with mixed case characters', () => {
  expect(sortStringByFrequency('Hello World')).toBe('lllooehwrdH');
});

test('sortStringByFrequency should handle strings with special characters', () => {
  expect(sortStringByFrequency('Hello, World!')).toBe('lllooehwrdH!,');
});
// END: 7f8d6a4b9jw3