/* Flags 
Reading Files
    r - open file for reading.
    r+ - open file for reading and writing.
    rs - open file for reading in synhronousmode.
    rs+ - open file for reading and writing, asking os to open it synchronously.

Writing to Files
    w - open file for writing. The file is created (if it does not exist) or truncated (if it exists).
    wx - Like flag 'w' but fails if the path exists.
    w+ - open file for reading and writing.
    wx+ -  Like flag 'w+' but fails if the path exists.

- Appending files
    a - open file for appending.
    ax - Like flag 'a' but fails if the path exists.
    a+ - open file for reading and appending.
    ax+ -  Like flag 'a+' but fails if the path exists.

*/

//fs.open(path, flag, [mode], callback)
//fs.openSync(path, flag, [mode]) ==> synchronous

const flagfile = 'node/filesystem/flag.txt';

const fs = require('fs');

fs.open(flagfile, 'r+', (err, fd) => {
  if (err) {
    console.log('code', err.code, 'message', err.message);
  } else {
    console.log('file opened successfully', fd);
    // fs.open requires you closing the file
    fs.close(fd, () => {
      console.log('file closed');
    });
  }
});
