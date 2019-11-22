//fs.mkdir(path, mode, callback)
//fs.mkdirSync(path, mode) ==> synchronous

const newdir = 'newDir';

const fs = require('fs');

function func1() {
  console.log('write boom to a file');
  return 'my new text. lol';
}

// let files = fs.mkdirSync(eventsdir, {encoding: 'buffer'}); // returns a buffer of the file names
fs.mkdirSync(newdir); // by default encoding is utf8 returns the file names
fs.writeFileSync(`${newdir}/newfile.js`, `(${func1.toString()})()`);

// using async reading from a buf of the dir path
fs.readdir(newdir, (err, files) => {
  if (err) console.log(err.message);
  else console.log(files);
});

fs.mkdir(`${newdir}/newest`, err => {
  if (err) {
    throw err;
  } else {
    fs.writeFile(`${newdir}/newest/newfile.txt`, func1(), err => {
      if (err) console.log(err.message);
    });
  }
});
