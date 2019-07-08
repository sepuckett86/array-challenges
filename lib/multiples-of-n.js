function multiplesOfN(int) {
  const multiples = [];
  for(let i = 1; i < 101; i++) {
    if(i % int === 0) {
      multiples.push(i);
    }
  }

  return multiples;
}

module.exports = multiplesOfN;
