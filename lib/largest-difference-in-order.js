function largestDifferenceInOrder(arr) {
  let difference = 0;
  for(let i = 0; i < arr.length; i++) {
    const start = arr[i];
    let end = 0;
    for(let y = i + 1; y < arr.length; y++) {
      if(arr[y] > end) {
        end = arr[y];
      }
    }
    if(end - start > difference) {
      difference = end - start;
    }
  }
  return difference;
}

module.exports = largestDifferenceInOrder;
