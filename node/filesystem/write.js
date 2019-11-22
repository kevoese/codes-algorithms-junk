//fs.write(fd, string, position, encoding, callback)
//fs.writeSync(fd, string, position, encoding) ==> synchronous

const newfile = 'node/filesystem/newfile.txt';

const fs = require('fs');
const str = `
- Appending files
    a - open file for appending.
    ax - Like flag 'a' but fails if the path exists.
    a+ - open file for reading and appending.
    ax+ -  Like flag 'a+' but fails if the path exists.
`
// appending to the current file using 'a' flag or write to it using the 'w' flag
fs.open(newfile, 'a', (err, fd) => {
  if (err) {
    console.log('code', err.code, 'message', err.message);
  } else {
    console.log('file opened successfully', fd);

    //let bytesSync = fs.writeSync(fd, str, 0, 'utf8');
    let bytesSync = fs.writeSync(fd, str);
    console.log(bytesSync);

    fs.write(fd, str, (err, bytes) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('bytes', bytes)
        }
    })
    // fs.open requires you closing the file
    fs.close(fd, () => {
      console.log('file closed');
    });
  }
});
