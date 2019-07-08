const multiplesOfN = require('../lib/multiples-of-n');

describe('multiplesOfN', () => {
  it('returns an array of positive integers that are multiples of n', () => {
    const multiplesOf5 = multiplesOfN(5);
    expect(multiplesOf5).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });
});

