const fs = require("fs");
const myStream = fs.createReadStream("big.txt"); // Nos params passa o arquivo

myStream.on("data", (data) => {
  console.log(data.toString());
});
