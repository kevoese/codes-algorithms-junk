
// used to get info about a file
//fs.stat(path, callback)
//fs.statSync(path) ==> synchronous

const flagfile = 'node/filesystem/flag.txt';

const fs = require('fs');

fs.stat(flagfile, (err, stats) => {
  if (err) {
    console.log('code', err.code, 'message', err.message);
  } else {
    console.log('the size of the file is', stats.size);
  }
});

let statSync = fs.statSync(flagfile);
console.log(`is it a dir ==> ${statSync.isDirectory()}`, statSync);
