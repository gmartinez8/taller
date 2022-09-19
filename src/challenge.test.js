const checker = require('./lengthEncoding');

test('should check for lenght encoding of strings', () => {
  const string = 'AAAAAAAAAAAAABBCCCCDD';
  expect(checker(string)).toBe("9A4A2B4C2D");
});

test('should check for lenght encoding of small numbers', () => {
  const string = 'aA';
  expect(checker(string)).toBe("1a1A");
});

test('should check for lenght encoding of numbers', () => {
  const string = '122333';
  expect(checker(string)).toBe("112233");
});