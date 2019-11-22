let data = process.argv.slice(2);

// function sayHello(name) {
//     name.forEach(element => {
//         process.send(`Greetings ${element}`)
//     });
// }

// sayHello(data);

process.on("message", (data) => { 
    console.dir(data, {colors:true})
})
