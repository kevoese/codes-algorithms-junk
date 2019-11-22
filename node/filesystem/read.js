//fs.read(fd, buffer, offset, length, position, callback)
//fs.readSync(fd, buffer, offset, length, position) ==> synchronous

const dirfile = 'node/filesystem/dir.txt';

const fs = require('fs');
let filesize = fs.statSync(dirfile).size;

let buf = Buffer.alloc(filesize);

fs.open(dirfile, 'r+', (err, fd) => {
  if (err) {
    console.log('code', err.code, 'message', err.message);
  } else {
    console.log('file opened successfully', fd);

    // let bytesSync = fs.readSync(fd, buf, 0, filesize, 0);
    // console.log(buf.toString());

    fs.read(fd, buf, 0, filesize, 0, (err, bytes) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('bytes', bytes)
            console.log('content', buf.toString());
        }
    })
    // fs.open requires you closing the file
    fs.close(fd, () => {
      console.log('file closed');
    });
  }
});
