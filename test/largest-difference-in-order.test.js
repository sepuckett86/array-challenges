const largestDifferenceInOrder = require('../lib/largest-difference-in-order');

describe('largestDifferenceInOrder', () => {
  it('returns largest difference', () => {
    const arr = [7, 8, 4, 9, 9, 15, 3, 1, 10];
    const difference = largestDifferenceInOrder(arr);
    expect(difference).toBe(11);
  });
});
