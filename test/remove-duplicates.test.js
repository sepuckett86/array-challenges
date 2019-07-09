const removeDuplicates = require('../lib/remove-duplicates');

describe('removeDuplicates', () => {
  it('returns an array of unique values', () => {
    const arr = [3, 3, 5, 3, 12, 7];
    const uniques = removeDuplicates(arr);
    expect(uniques).toEqual([3, 5, 12, 7]);
  });
});
