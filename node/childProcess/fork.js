// child_process.exec(modulePath, [args] ,{options})

const cp = require('child_process');
const path = require('path');

// const child = cp.fork("./node/childProcess/forkChild.js", ["great", "name", "here"])
// const child = cp.fork("forkChild.js", ["great", "name", "here"], {cwd: "./node/childProcess/"})

// child.on("message", (data) => {
//     console.log(`message: ${data}`);   
// })

const child = cp.fork("forkChild.js", {cwd: "./node/childProcess/"})

child.on("exit", () => {
    console.log(`end child process successful`);   
})

let interval = setInterval(() => {
    child.send({name: 'kelvin', age: 25, job: 'software engr'})
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    child.kill();
}, 5000);

const numCPUs = require('os').cpus().length;
console.log(`cpu number ${numCPUs}`)