function findTheMissingNumber(arr, upper, lower) {
  const sorted = arr.sort((a, b) => a - b);
  if(sorted[0] !== lower) {
    return lower;
  } else if(sorted[sorted.length - 1] !== upper) {
    return upper;
  }
  for(let i = 0; i < arr.length; i++) {
    if(sorted[i] + 1 !== sorted[i + 1]) {
      return sorted[i] + 1;
    }
  }
  return 'none are missing';
}

module.exports = findTheMissingNumber;
