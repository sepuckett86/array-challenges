const multiplesOfN = require('../lib/multiples-of-n');

describe('multiplesOfN', () => {
  it('returns integers in range 1-100 that are multiples of 5', () => {
    const multiplesOf5 = multiplesOfN(5);
    expect(multiplesOf5).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });
  it('returns integers in range 1-100 that are multiples of 15', () => {
    const multiplesOf15 = multiplesOfN(15);
    expect(multiplesOf15).toEqual([15, 30, 45, 60, 75, 90]);
  });
  it('returns integers in range 1-100 that are multiples of 113', () => {
    const multiplesOf113 = multiplesOfN(113);
    expect(multiplesOf113).toEqual([]);
  });
});

