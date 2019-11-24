const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip(); //create a transform stream that zips the the file
const gunzip = zlib.createGunzip(); //create a transform stream that Unzips the file
const readstream = fs.createReadStream(__dirname + '/flag.txt');

const writestream = fs.createWriteStream(__dirname + '/streams/flag.txt.gz');

readstream.pipe(gzip).pipe(writestream);
let writestramUnziped = fs.createWriteStream(
  __dirname + '/streams/unzipped.txt'
);

writestream.on('close', () => {
  let writestreamUnziped = fs.createWriteStream(
    __dirname + '/streams/unzipped.txt'
  );
  let readZippedFile = fs.createReadStream(__dirname + '/streams/flag.txt.gz');
  readZippedFile.pipe(gunzip).pipe(writestreamUnziped);
});
