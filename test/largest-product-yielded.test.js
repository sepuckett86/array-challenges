const largestProductYielded = require('../lib/largest-product-yielded');

describe('largestProductYielded', () => {
  it('returns largest product', () => {
    const arr = [-10, 7, 29, 30, 5, -10, -70];
    const product = largestProductYielded(arr);
    expect(product).toBe(21000);
  });
  it('returns largest product even if no negatives', () => {
    const arr = [7, 29, 30];
    const product = largestProductYielded(arr);
    expect(product).toBe(6090);
  });
  it('returns largest product even if one positive', () => {
    const arr = [7, -29, -30];
    const product = largestProductYielded(arr);
    expect(product).toBe(6090);
  });
});
