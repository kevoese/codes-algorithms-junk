// child_process.exec(command, [args], {options}, callback)

let cp = require('child_process');

/** execute an external file */
// const compiler = "g++";
// const version = "-std=c++11";
// const out= "-o";
// const infile = "hello.cpp" 
// const outfile = "hello.out";
/*
 let child = cp.execFile(compiler, [version, out, outfile, inputfile], (err, out, stderr) => {
if(err) {
    throw err
  }
  else {
    do some exec logic for the external file
    
  }
})
*/

let child = cp.execFile("ls", ["-a", "-l"], {cwd: ".."}, (err, out, stderr) => {
  if(err) {
    throw err
  }
  else {
    console.log(out);
    
  }
})