const fs = require('fs'),
    path = require('path');

fs.readdir(path.resolve(__dirname, ('../')), (err, files) => {
    if (err) return console.log(err)
    console.log(files.join('\n'))
})