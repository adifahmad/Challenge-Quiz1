function deretKaskus(n) {
  let kel3 = [];
  for (let i = 0; i < n; i++) {
    let kalkulasi = 3 * (i + 1);
    kel3.push(kalkulasi);
    if (kel3[i] % 5 === 0 && kel3[i] % 6 === 0) {
      kel3[i] = "KASKUS";
    } else if (kel3[i] % 5 === 0) {
      kel3[i] = "KAS";
    } else if (kel3[i] % 6 === 0) {
      kel3[i] = "KUS";
    }
  }
  return kel3;
}

console.log(deretKaskus(10));
