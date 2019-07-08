const largestProductYielded = require('../lib/largest-product-yielded');

describe('largestProductYielded', () => {
  it('test here', () => {
    const arr = [-10, 7, 29, 30, 5, -10, -70];
    const product = largestProductYielded(arr);
    expect(product).toBe(21000);
  });
});
