const fs = require('fs'),
  path = require('path');

let blogfile = '';

// Option #1
// fs.readFile('./temp/hello.txt', { encoding: 'utf8' }, (err, data) => {
//   if (err) return console.error(err);
//   blogfile = data
//   console.log(blogfile);
// });

// Option #2
fs.readFile(
  path.resolve(__dirname, './temp/hello.txt'),
  { encoding: 'utf8' },
  (err, data) => {
    if (err) return console.error(err);
    blogfile = data;
    console.log(blogfile);
  }
);

// node index.js
