function stringManipulation(word) {
  let result = [];
  if (
    word[0] === "a" ||
    word[0] === "i" ||
    word[0] === "u" ||
    word[0] === "e" ||
    word[0] === "o"
  ) {
    console.log(word);
  } else {
    for (let i = 0; i < word.length; i++) {
      result.push(word[i]);
    }
    result.push(word[0]);
    result.shift();
    console.log(result.join("") + "nyo");
  }
}

stringManipulation("ayam");
stringManipulation("bebek");
