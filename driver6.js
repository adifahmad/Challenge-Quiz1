function sentencesManipulation(sentence) {
  let result = [];
  let output = [];
  result = sentence.split(" ");
  for (let i = 0; i < result.length; i++) {
    if (
      result[i][0] === "a" ||
      result[i][0] === "i" ||
      result[i][0] === "u" ||
      result[i][0] === "e" ||
      result[i][0] === "o"
    ) {
      output.push(result[i]);
    } else {
      output.push(result[i].slice(1) + result[i][0] + "nyo");
    }
  }
  console.log(output.join(" "));
}

sentencesManipulation("ibu pergi ke pasar bersama aku");
