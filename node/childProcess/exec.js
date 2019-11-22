// child_process.exec(command, {options}, callback)

let cp = require('child_process');

// cp.exec(
//   'cp node/childProcess/exec.js node/childProcess/fork.js',
//   (err, stdout, stderr) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(stdout);
//     }
//   }
// );

// let remove = cp.exec('rm -r css', (err, stdout, stderr) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(stdout);
//   }
// });

let list = cp.exec('ls', (err, stdout, stderr) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(stdout);
  }
});
