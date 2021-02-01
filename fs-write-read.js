var fs = require("fs");
var readableStream = fs.createReadStream("big.txt");
var writableStream = fs.createWriteStream("formatted.txt");

readableStream.setEncoding("utf8");

readableStream.on("data", function (chunk) {
  writableStream.write(chunk);
});
