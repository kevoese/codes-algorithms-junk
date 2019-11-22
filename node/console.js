let falsy = false;
// falsy = null;
// falsy = '';
// falsy = null;
// falsy = undefined;
// falsy = NaN;

console.assert(falsy, `the value ${falsy} is falsy`); // prints only for falsy values console.assert(value, message)
console.info('alias for console log');
console.log('log to the screen through the std out ');
console.error('error to the console thru the stderr out');
const { getPrimes2, getPrimes, getPrimes3 } = require('../primes');
// time a program
// console.time('timer');
// console.log( getPrimes3());
// console.timeEnd('timer');

//

// function func1(params) {
//     console.trace("stack trace"); // prints the stack trace
// }

// function func2(params) {
//     func1()
// }

// function func3(params) {
//     func2()
// }

// function func4(params) {
//     func3()
// }

// func4();

// console.dir(); //prints an object more than two levels deep by providing the depth property in the options,
console.warn("bad code")