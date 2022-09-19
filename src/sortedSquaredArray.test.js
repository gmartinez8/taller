const squaredArray = require('./sortedSquaredArray');

test('should return squared array', () => {
  const array = [1, 2, 3, 5, 6, 8, 9];
  const expectedResult = [1, 4, 9, 25, 36, 64, 81];
  const result = squaredArray(array);

  expect(result).toStrictEqual(expectedResult);
});

test('should return squared array of negative numbers', () => {
  const array = [-2, -1];
  const expectedResult = [1, 4];
  const result = squaredArray(array);

  expect(result).toStrictEqual(expectedResult);
});

test('should return squared array of repeated numbers', () => {
  const array = [-10, -5, 0, 5, 10];
  const expectedResult =  [0, 25, 25, 100, 100];
  const result = squaredArray(array);

  expect(result).toStrictEqual(expectedResult);
});

