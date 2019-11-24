/*
The url module provides two APIs for working with URLs:
a legacy API that is Node.js specific, 
and a newer API that implements the same WHATWG URL Standard used by web browsers.
*/
// Parsing the URL string using the WHATWG API:
const myURL = new URL(
  'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
);
console.log(`${myURL.username}:${myURL.password}`); // does not have the auth like the legacy api

// Parsing the URL string using the Legacy API:
const url = require('url');
const myURL2 = url.parse(
  'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
);
console.log(myURL2.auth); // does not have username or password properrty like the WHATWG API

//new URL(input[, base])

console.log(new URL('/foo', 'https://example.org/').href);


// Unicode characters appearing within the hostname of input will be automatically converted to ASCII using the Punycode algorithm.
console.log(new URL('https://測試').href);