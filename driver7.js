function weirdMultiply(sentence) {
  if (sentence < 10) {
    return sentence;
  }
  let sum = 1;
  let bilNum = sentence.toString();
  let arrNum = bilNum.split("");
  for (let i = 0; i < arrNum.length; i++) {
    sum *= arrNum[i];
  }
  return weirdMultiply(sum);
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
