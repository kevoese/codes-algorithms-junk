//writing data from a buffer to a file 

//fs.write(fd, buffer, offset, length, position, callback)
//fs.writeSync(fd, buffer, offset, length, position) ==> synchronous

const newfile = 'node/filesystem/newfile.txt';
const fs = require('fs');

const str = `removethischar::Some raw data in a buffer to be written
 to a new file after removing the offset
 
`;

const buf = Buffer.from(str, 'utf8');
const offset = 16;

// appending to the current file using 'a' flag or write to it using the 'w' flag
fs.open(newfile, 'a', (err, fd) => {
  if (err) {
    console.log('code', err.code, 'message', err.message);
  } else {
    console.log('file opened successfully', fd);

    let bytesSync = fs.writeSync(fd, buf, offset, buf.byteLength - offset, 0);
    console.log('bytes written is', bytesSync);

    fs.write(fd, buf, offset, buf.byteLength - offset, 0, (err, bytes) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('bytes', bytes);
      }
    });
    // fs.open requires you closing the file
    fs.close(fd, () => {
      console.log('file closed');
    });
  }
});
