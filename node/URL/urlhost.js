// url.host
// <string>
// Gets and sets the host portion of the URL.
/*
url.hostname#
<string>
Gets and sets the hostname portion of the URL.
The key difference between url.host and url.hostname
is that url.hostname does not include the port.
*/
const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host);
// Prints example.org:81

myURL.host = 'example.com:8289';
console.log(myURL.href);
// Prints https://example.com:82/foo

myURL.host = 'example.com:01.8289'; 
console.log(myURL.href);
// Prints https://example.com:1/foo

console.log(myURL.hostname);
// Prints example.com

myURL.hostname = 'example.org:82'; //it ignores the new port value in the string
console.log(myURL.href);
// Prints https://example.org:1/foo