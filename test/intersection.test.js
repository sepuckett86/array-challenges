const intersection = require('../lib/intersection');

describe('intersection', () => {
  it('returns an array of shared values', () => {
    const arr1 = [2, 2, 4, 1];
    const arr2 = [1, 2, 0, 2];
    const finalArr = intersection(arr1, arr2);
    expect(finalArr).toEqual([2, 1]);
  }); 
});
