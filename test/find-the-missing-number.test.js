const findTheMissingNumber = require('../lib/find-the-missing-number');

describe('findTheMissingNumber', () => {
  it('tests', () => {
    const arr = [2, 5, 1, 4, 9, 6, 3, 7];
    const upper = 9;
    const lower = 1;
    const missingNumber = findTheMissingNumber(arr, upper, lower);
    expect(missingNumber).toBe(8);
  });
});

