const fs = require("fs");
const data = fs.readFileSync("data.json", "utf-8");
const readline = require("node:readline");
const quest = JSON.parse(data);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Tebakan :",
});

console.log(
  "Selamat datang di permainan Tebak Kata, silahkan isi jawaban dengan benar ya! "
);

let counter = 0;

console.log("Pertanyaan: " + quest[counter].definition);
rl.prompt();

rl.on("line", (jawaban) => {
  if (jawaban.toString().toLowerCase() == quest[counter].term) {
    console.log("Selamat Anda Benar");
    counter++;
    if (counter == quest.length) {
      console.log("Hore anda menang");
      rl.close();
    }
    console.log("Pertanyaan: " + quest[counter].definition);
  } else {
    console.log("Wkwkwkwk, Anda Kurang Beruntung!");
  }

  rl.prompt();
}).on("close", () => {
  process.exit(0);
});
