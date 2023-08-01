function sentencesManipulation(sentence) {
  let output = "";
  let vocal = "aiueo";
  let result = sentence.split(" ");
  for (let i = 0; i < result.length; i++) {
    if (vocal.includes(result[i].charAt(0)) == true) {
      output += result[i] + " ";
    }
    if (vocal.includes(result[i].charAt(0)) == false) {
      output += result[i].slice(1) + result[i].charAt(0) + "nyo" + " ";
    }
  }
  console.log(output);
}

sentencesManipulation("ibu pergi ke pasar bersama aku");
