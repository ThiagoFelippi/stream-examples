const { createHash } = require("crypto");
const { Writable } = require("stream");

const writableStream = new Writable({
  write(chunk, enconding, callback) {
    console.log(chunk.toString()); // O que está sendo escrito
    setTimeout(() => {
      callback(); // Callback do método
    }, 1000);
  },
});

(() => {
  for (let i = 0; i < 5; i++) {
    if (i < 4) {
      writableStream.write("Estou escrevendo algo");
    } else {
      writableStream.end(); // Para chamar o on("close")
    }
  }
})();

writableStream.on("close", () => {
  console.log("Acabou");
});
