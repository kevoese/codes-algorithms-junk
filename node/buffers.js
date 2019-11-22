let zeroBuf = Buffer.alloc(20).fill('A'); //buffer of 20 bytes
// const str = '\u00bd + \u00bc = \u00be yay!';

// console.log(`${str}: ${str.length} characters, ` +
//             `${Buffer.byteLength(str, 'utf8')} bytes`);

// Create a single `Buffer` from a list of three `Buffer` instances.

// Create two `Buffer` instances.
const buf1 = Buffer.allocUnsafe(8192/2);
console.log(buf1)
