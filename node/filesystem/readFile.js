// read file without opening and closing the file
//fs.readFile(path, {encoding, flag}, callback) - async
//fs.readFileSync(path, {encoding, flag}) - sync

const flagfile = 'node/filesystem/flag.txt';

const fs = require('fs');

//method1
// let data = fs.readFileSync(flagfile, 'utf8');

//method2
// let data = fs.readFileSync(flagfile, {encoding: 'utf8'});

//method 3
let data = fs.readFileSync(flagfile).toString();

console.log(data);

// fs.readFile(flagfile, {encoding: 'utf8'}, (err, data) => {
//     if (err) {
//         console.log(err.message);
//     }else {
//         console.log(data)
//     }
// })

fs.readFile(flagfile, (err, data) => {
    if (err) {
        console.log(err.message);
    }else {
        console.log(data.toString())
    }
})
