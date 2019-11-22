// child_process.exec(command, [args] , {options})

let cp = require('child_process');

var progs = {
    list: "ls",
    copy: "cp",
    folder: "mkdir"
}
// spawn function
let child = cp.spawn(progs.list, ["-a"], {cwd: '../player-sprite-game'}); 

child.stdout.on("data", (data) => {
    console.log(`data:\n${data}`)
})

// when error occurs they are printed to the std error stream

child.stderr.on("data", error => {
    console.log(`error:\n${error}`)
})

let copy = cp.spawn(progs.copy, ["../player-sprite-game/package.json", "primes1.json"]);

copy.on("exit", () => {
    console.log("copy process complete");
})

var mkdir = cp.spawn("mkdir", ["newDir"])

mkdir.on("exit", () => {
    console.log("new dir created");
})
