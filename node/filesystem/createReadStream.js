//fs.createReadStream(path, options)

/*
path <string> | <Buffer> | <URL>

options <string> | <Object>
    flags <string> See support of file system flags. Default: 'r'.
    encoding <string> Default: null
    fd <integer> Default: null
    mode <integer> Default: 0o666
    autoClose <boolean> Default: true
    emitClose <boolean> Default: false
    start <integer>
    end <integer> Default: Infinity
    highWaterMark <integer> Default: 64 * 1024 //number of bytes it would read in chunks

 */

const fs = require('fs');

// let readStream = fs.createReadStream('node/filesystem/newfile.txt', {
//   highWaterMark: 68,
// });

let readStream = fs.createReadStream('node/filesystem/newfile.txt', {
  highWaterMark: 34,
  start: 34,
  //   end: 135,
  encoding: 'utf8',
});

// data by default is a buffer
readStream.on('data', data => {
  if (data.indexOf('jack') === -1) {
    console.log(data.toUpperCase());
  } else {
    console.log(data);
    readStream.emit('array', data.split(' '));
  }
});

readStream.on('array', data => {
  console.log(data);
});
