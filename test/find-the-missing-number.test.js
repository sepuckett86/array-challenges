const findTheMissingNumber = require('../lib/find-the-missing-number');

describe('findTheMissingNumber', () => {
  it('finds the missing number', () => {
    const arr = [2, 5, 1, 4, 9, 6, 3, 7];
    const upper = 9;
    const lower = 1;
    const missingNumber = findTheMissingNumber(arr, upper, lower);
    expect(missingNumber).toBe(8);
  });
  it('finds the missing number if it is the lower bound', () => {
    const arr = [2, 5, 8, 4, 9, 6, 3, 7];
    const upper = 9;
    const lower = 1;
    const missingNumber = findTheMissingNumber(arr, upper, lower);
    expect(missingNumber).toBe(1);
  });
  it('finds the missing number if it is the upper bound', () => {
    const arr = [2, 5, 8, 4, 1, 6, 3, 7];
    const upper = 9;
    const lower = 1;
    const missingNumber = findTheMissingNumber(arr, upper, lower);
    expect(missingNumber).toBe(9);
  });
});

