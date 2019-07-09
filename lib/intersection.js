const removeDuplicates = require('./remove-duplicates');

function intersection(arr1, arr2) {
  const filtered = arr1.filter(num => {
    if(arr2.includes(num)) {
      return true;
    } else {
      return false;
    }
  });
  return removeDuplicates(filtered);
}

module.exports = intersection;
