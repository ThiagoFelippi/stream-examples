const { pipeline } = require("stream/promises");
const { createReadStream, createWriteStream, appendFile } = require("fs");

const run = async () => {
  await pipeline(
    createReadStream("./big.txt"),
    createWriteStream("formatted.txt")
  );
  console.log("Tudo certo!!");
};

run().catch((err) => {
  console.log(`Não bombou: ${err}`);
});
