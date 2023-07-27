function deretKaskus(n) {
  let kelLima = [];
  for (let i = 0; i < n; i++) {
    kelLima.push(3 * (i + 1));
    if (kelLima[i] % 5 === 0 && kelLima[i] % 6 === 0) {
      kelLima[i] = "KASKUS";
    } else if (kelLima[i] % 5 === 0) {
      kelLima[i] = "KAS";
    } else if (kelLima[i] % 6 === 0) {
      kelLima[i] = "KUS";
    }
  }
  return kelLima;
}

console.log(deretKaskus(10));
