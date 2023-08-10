const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "tulis kalimatmu disini > ",
});

rl.prompt();

rl.on("line", (sentence) => {
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
  console.log("hasil konversi: " + output.join(" "));
  rl.prompt();
}).on("close", () => {
  console.log("Good bye!");
  process.exit(0);
});
