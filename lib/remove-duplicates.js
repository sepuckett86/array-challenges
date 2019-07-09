function removeDuplicates(arr) {
  const dict = {};
  const newArr = [];
  arr.forEach(num => {
    if(!dict[num]) {
      newArr.push(num);
      dict[num] = true;
    }
  });
  return newArr;
}

module.exports = removeDuplicates;
