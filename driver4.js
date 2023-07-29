function indexPrime(param1) {
  let result = [];
  for (let i = 2; i < 1000000; i++) {
    let numPrime = true;
    for (let j = 2; j < i; j++) {
      if (i !== j && i % j === 0) {
        numPrime = false;
      }
    }
    if (numPrime) {
      result.push(i);
    }
    if (result.length === param1) {
      break;
    }
  }
  return result[param1 - 1];
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
