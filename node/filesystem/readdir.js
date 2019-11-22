//fs.readdir(path, oprions, callback)
//fs.readdirSync(path, oprions) ==> synchronous

const eventsdir = 'node/events';
const dirBuf = Buffer.from(eventsdir);

const fs = require('fs');

// let files = fs.readdirSync(eventsdir, {encoding: 'buffer'}); // returns a buffer of the file names
let files = fs.readdirSync(eventsdir); // by default encoding is utf8 returns the file names

console.log(files);

// using async reading from a buf of the dir path
fs.readdir(dirBuf, (err, files) => {
  if (err) console.log(err.message);
  else console.log(files);
});
