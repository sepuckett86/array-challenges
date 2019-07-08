function largestProductYielded(arr) {
  // filter into array of sorted positives and array of sorted negatives
  const positives = arr.filter(num => num > 0).sort((a, b) => b - a);
  const negatives = arr.filter(num => num < 0).sort((a, b) => a - b);
  // multiply the top three positives 
  const positiveProduct = positives[0] * positives[1] * positives[2];
  // multiply the bottom two negatives and top positive
  const mixedProduct = negatives[0] * negatives[1] * positives[0];
  // check if values are truthy
  if(positiveProduct && mixedProduct) {
    // compare the two and return the higher
    if(positiveProduct > mixedProduct) {
      return positiveProduct;
    } else {
      return mixedProduct;
    }
  } else if(!positiveProduct) {
    return mixedProduct;
  } else {
    return positiveProduct;
  }
}

module.exports = largestProductYielded;
