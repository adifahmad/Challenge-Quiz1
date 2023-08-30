const fs = require("fs");
const data = fs.readFileSync(`todo.json`, "utf-8");
const quest = JSON.parse(data);

let counter = quest.length + 1;

if (!process.argv[2] || process.argv[2] === "help") {
  console.log(
    ">>> TODO LIST <<< \n",
    "$ node driver13.js <command> \n",
    "$ node driver13.js list \n",
    "$ node driver13.js task <task_id> \n",
    "$ node driver13.js add <task_content> \n",
    "$ node driver13.js delete <task_id> \n",
    "$ node driver13.js complete <task_id> \n",
    "$ node driver13.js uncomplete <task_id> \n",
    "$ node driver13.js list:outstanding asc|desc \n",
    "$ node driver13.js list:completed asc|desc \n",
    "$ node driver13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N> \n",
    "$ node driver13.js filter:<tag_name>"
  );
} else if (process.argv[2] === "list") {
  for (let i = 0; i < quest.length; i++) {
    console.log(
      `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${quest[i].content}.`
    );
  }
} else if (process.argv[2] === "add") {
  quest.push({
    id: counter,
    content: process.argv.slice(3).join(" "),
    complete: false,
    tag: "",
  });
  fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
  console.log(`${process.argv.slice(3).join(" ")} status telah ditambahkan`);
} else if (process.argv[2] === "delete") {
  quest.splice(process.argv[3 - 1], 1);
  console.log(
    `${quest[process.argv[3] - 1].content} telah dihapus dari daftar`
  );
  fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
} else if (process.argv[2] === "complete") {
  quest[process.argv[3] - 1].complete = true;
  console.log(`${quest[process.argv[3] - 1].content} telah di complete`);
  fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
} else if (process.argv[2] === "uncomplete") {
  quest[process.argv[3] - 1].complete = false;
  console.log(`${quest[process.argv[3] - 1].content} telah dibatalkan`);
  fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
} else if (process.argv[2] === "list:outstanding") {
  if (process.argv[3] === "asc") {
    for (let i = 0; i < quest.length; i++) {
      if (quest[i].complete === false) {
        console.log(
          `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${
            quest[i].content
          }.`
        );
      }
    }
  } else if (process.argv[3] === "desc") {
    for (let i = quest.length - 1; i >= 0; i--) {
      if (quest[i].complete === false) {
        console.log(
          `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${
            quest[i].content
          }.`
        );
      }
    }
  }
} else if (process.argv[2] === "list:completed") {
  if (process.argv[3] === "asc") {
    for (let i = 0; i < quest.length; i++) {
      if (quest[i].complete === true) {
        console.log(
          `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${
            quest[i].content
          }.`
        );
      }
    }
  } else if (process.argv[3] === "desc") {
    for (let i = quest.length - 1; i >= 0; i--) {
      if (quest[i].complete === true) {
        console.log(
          `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${
            quest[i].content
          }.`
        );
      }
    }
  }
} else if (process.argv[2] === "tag") {
  quest[process.argv[3] - 1].tags = process.argv.slice(4);
  fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
  console.log(
    `${quest[process.argv[3] - 1].tags} telah ditambahkan ke ${
      quest[process.argv[3] - 1].content
    } `
  );
} else if (process.argv[2] === `filter:${process.argv[2].slice(7)}`) {
  for (let i = 0; i < quest.length; i++) {
    if (quest[i].tags.includes(process.argv[2].slice(7))) {
      console.log(
        `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${
          quest[i].content
        }.`
      );
    }
  }
}
