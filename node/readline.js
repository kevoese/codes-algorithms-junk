/*
The readline module provides an interface 
for reading data from a Readable stream
 (such as process.stdin) one line at a time
*/

const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close(); //close readline interface
// });

/* The 'SIGINT' event is emitted whenever the input stream receives a <ctrl>-C input,
 known typically as SIGINT
 */
// rl.on('SIGINT', () => {
//     rl.question('Are you sure you want to exit? ', (answer) => {
//      if (answer.match(/^y(es)?$/i)) rl.pause(); 
//     });
//   });

async function processLineByLine() {
    const fileStream = fs.createReadStream('node/filesystem/newfile.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
  

    rl.on('line', (line) => {
        console.log(`Line from file: ${line}`);
      });
  }
  
  processLineByLine();