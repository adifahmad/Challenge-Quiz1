const fs = require("fs");
const data = fs.readFileSync("data.json", "utf-8");
const readline = require("node:readline");
const { skip } = require("node:test");
const quest = JSON.parse(data);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Jawaban:",
});

if (process.argv[2]) {
  console.log(
    "Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini 'data.json'.\n Untuk bermain, jawablah dengan jawaban yang sesuai\n ",
    "Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanya lagi\n"
  );

  let counter = 0;
  let salah = 0;

  console.log("Pertanyaan: " + quest[counter].definition);
  rl.prompt();

  rl.on("line", (jawaban) => {
    if (jawaban.toString().toLowerCase() == quest[counter].term) {
      console.log("Anda Beruntung !\n");
      counter++;
      salah = 0;
      if (counter == quest.length) {
        console.log("Anda Berhasil\n");
        rl.close();
      }
      console.log("Pertanyaan: " + quest[counter].definition);
    } else if (jawaban.toString().toLowerCase() === "skip") {
      quest.push(quest[counter]);
      counter++;
      salah = 0;
      console.log("Pertanyaan: " + quest[counter].definition);
    } else {
      salah++;
      console.log(
        `Anda Kurang Beruntung, anda telah salah ${salah} kali. silahkan coba lagi`
      );
    }
    rl.prompt();
  }).on("close", () => {
    process.exit(0);
  });
} else {
  console.log(
    "Tolong sertakan nama file sebagai inputan soal-soalnya, Misalnya 'node driver12.js data.json'. \n"
  );
  process.exit();
}
