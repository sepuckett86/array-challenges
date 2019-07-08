function largestProductYielded(arr) {
  // sort into array of sorted positives and array of negatives
  const positives = arr.filter(num => num > 0).sort((a, b) => b - a);
  const negatives = arr.filter(num => num < 0).sort((a, b) => a - b);
  console.log(positives, negatives);
  // multiply the top three positives 
  const positiveProduct = positives[0] * positives[1] * positives[2];
  console.log('positiveProduct', positiveProduct);
  // multiply the bottom two negatives and top positive
  const mixedProduct = negatives[0] * negatives[1] * positives[0];
  console.log(mixedProduct);
  // compare the two and return the higher
  if(positiveProduct > mixedProduct) {
    return positiveProduct;
  } else {
    return mixedProduct;
  }
}

module.exports = largestProductYielded;
