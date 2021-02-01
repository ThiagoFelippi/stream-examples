const { readFile } = require("fs/promises");
const { Readable } = require("stream");

const run = async () => {
  const readableStream = new Readable({
    read() {},
  });

  const bigFile = await readFile("big.txt", "utf-8");
  readableStream.push(bigFile);

  readableStream.on("data", (chunk) => {
    console.log(chunk.toString());
  });
};

run();
