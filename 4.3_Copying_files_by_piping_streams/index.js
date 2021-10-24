const fs = require('fs');

const readable = fs.createReadStream(__dirname + '/node.txt', {
  encoding: 'utf8',
  highWaterMark: 16 * 1024,
});
const writable = fs.createWriteStream(__dirname + '/nodePipe.txt');

readable.pipe(writable);

// node index.js
// Creates a new file /nodePipe.txt with same content as node.txt