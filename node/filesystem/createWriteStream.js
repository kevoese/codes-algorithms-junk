// fs.createWriteStream(path, options);

/*
 path <string> | <Buffer> | <URL>
options <string> | <Object>

flags <string> See support of file system flags. Default: 'w'.
encoding <string> Default: 'utf8'
fd <integer> Default: null // you can pass an already open file to it
mode <integer> Default: 0o666
autoClose <boolean> Default: true
emitClose <boolean> Default: false
start <integer>
Returns: <fs.WriteStream>
*/

const fs = require('fs');

const str = `Modifying a file rather than replacing it may require a flags mode of r+ rather than the default mode w.
The encoding can be any one of those accepted by Buffer.
If autoClose is set to true (default behavior) on 'error' or 'finish' the file descriptor will be closed automatically.
If autoClose is false, then the file descriptor won't be closed, even if there's an error.
It is the application's responsibility to close it and make sure there's no file descriptor leak.
By default, the stream will not emit a 'close' event after it has been destroyed.
This is the opposite of the default for other Writable streams.
Set the emitClose option to true to change this behavior.
Like ReadStream, if fd is specified,
WriteStream will ignore the path argument and will use the specified file descriptor.
This means that no 'open' event will be emitted.
fd should be blocking; non-blocking fds should be passed to net.Socket.
If options is a string, then it specifies the encoding.
`;

let wstream = fs.createWriteStream('node/filesystem/newfile.txt');
let rstream = fs.createReadStream('node/filesystem/flag.txt', {
  highWaterMark: 30,
});

// wstream.on('open', () => {
//   wstream.write(str, (err, data) => {
//     if (err) {
//       console.log('err', err.message);
//     } else {
//       console.log('data written');
//     }
//   });
// });

// method 1
// read from file flag and write  to file newfile.txt
// rstream.on('data', data => {
//   console.log({ data: data.toString() });
//   wstream.write(data, err => {
//     if (err) {
//       console.log('err', err.message);
//     } else {
//       console.log('...');
//     }
//   });
// });

// method2

rstream.pipe(wstream);
