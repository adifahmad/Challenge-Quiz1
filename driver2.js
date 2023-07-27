function deretKaskus(n) {
  let kelipatan3 = [];
  for (let i = 0; i < n; i++) {
    let kalkulasi = 3 * (i + 1);
    kelipatan3.push(kalkulasi);
    if (kelipatan3[i] % 5 === 0 && kelipatan3[i] % 6 === 0) {
      kelipatan3[i] = "KASKUS";
    } else if (kelipatan3[i] % 5 === 0) {
      kelipatan3[i] = "KAS";
    } else if (kelipatan3[i] % 6 === 0) {
      kelipatan3[i] = "KUS";
    }
  }
  return kelipatan3;
}

console.log(deretKaskus(10));
