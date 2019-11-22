// write file without opening and closing the file
//fs.writeFile(file, data, options, callback) - async
//fs.writeFileSync(file, data, options) - sync
/*
 options = {encoding, flag, mode}
*/

const flagfile = 'node/filesystem/dir.txt';

const fs = require('fs');

const str = `Writing to a file using writefile method \n`;

const buf = Buffer.from(`from a buffer, ${str}`, 'utf8');

fs.writeFileSync(flagfile, str); // flag w by default

// using flag for appending
fs.writeFile(flagfile, buf, { flag: 'a' }, (err, data) => {
  if (err) {
    console.log(err.message);
  }
});
