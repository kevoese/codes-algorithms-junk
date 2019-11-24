// url.origin#
// Gets the read-only serialization of the URL's origin.

const myURL = new URL('https://example.org/foo/bar?baz');
console.log(myURL.origin);
// Prints https://example.org
const idnURL = new URL('https://測試');
console.log(idnURL.origin);
// Prints https://xn--g6w251d

console.log(idnURL.hostname);
// Prints xn--g6w251d

console.log();

/*
url.password
Gets and sets the password portion of the URL.
Invalid URL characters included in the value
assigned to the pathname property are percent-encoded.
*/

const myURL1 = new URL('https://abc:xyz@example.com');
console.log(myURL1.password);
// Prints xyz

myURL1.password = '123';
console.log(myURL1.href);
// Prints https://abc:123@example.com

myURL1.password = 768.876;
console.log(myURL1.href);
// Prints https://abc:768.876@example.com/

console.log();

/*
url.pathname
Gets and sets the path portion of the URL.
*/

const myURL2 = new URL('https://example.org/abc/xyz?123');
console.log(myURL2.pathname);
// Prints /abc/xyz

myURL2.pathname = '/abcdef';
console.log(myURL2.href);
// Prints https://example.org/abcdef?123

myURL2.pathname = '12345?098*+uio';
console.log(myURL2.href);
// Prints https://example.org/12345%3F098*+uio?123

console.log();

/*
url.port
<string>
Gets and sets the port portion of the URL.

The port value may be a number or a string containing a number
in the range 0 to 65535 (inclusive).
Setting the value to the default port of the URL objects given protocol
will result in the port value becoming the empty string ('').
*/


const myURL3 = new URL('https://example.org:8888');
console.log(myURL3.port);
// Prints 8888

// Default ports are automatically transformed to the empty string
// (HTTPS protocol's default port is 443)
myURL3.port = '443';
console.log('empty string =>', myURL3.port);
// Prints the empty string
console.log(myURL3.href);
// Prints https://example.org/

myURL3.port = 1234;
console.log(myURL3.port);
// Prints 1234
console.log(myURL3.href);
// Prints https://example.org:1234/

// Completely invalid port strings are ignored
myURL3.port = 'abcd';
console.log(myURL3.port);
// Prints 1234

// Leading numbers are treated as a port number
myURL3.port = '5678abcd';
console.log(myURL3.port);
// Prints 5678

// Non-integers are truncated
myURL3.port = 6234.5678;
console.log(myURL3.port);
// Prints 6234

// Out-of-range numbers which are not represented in scientific notation
// will be ignored.
myURL3.port = 1e10; // 10000000000, will be range-checked as described below
console.log(myURL3.port);
// Prints 1234

// The highest value of the port
myURL3.port = 65535;
console.log(myURL3.port);
// Prints 65535

myURL3.port = 4.567e21;
console.log(myURL3.port);
// Prints 4 (because it is the leading number in the string '4.567e21')

console.log();

/*
url.protocol
Gets and sets the protocol portion of the URL.
*/

const myURL4 = new URL('https://example.org');
console.log(myURL4.protocol);
// Prints https:

myURL4.protocol = 'ftp';
console.log(myURL4.href);
// Prints ftp://example.org/

// Invalid URL protocol values assigned to the protocol property are ignored.
myURL4.protocol = 'kelvin';
console.log(myURL4.href);
// Prints ftp://example.org/

console.log();

/*
url.search
Gets and sets the serialized query portion of the URL.
*/

const myURL5 = new URL('https://example.org/abc?123');
console.log(myURL5.search);
// Prints ?123

myURL5.search = 'abc=xyz';
console.log(myURL5.href);
// Prints https://example.org/abc?abc=xyz

console.log();

/*
url.username
Gets and sets the username portion of the URL.
*/

const myURL6 = new URL('https://oldusername:xyz@example.com');
console.log(myURL6.username);
// Prints oldusername

myURL6.username = 'kelvinese';
console.log(myURL6.href);
// Prints https://kelvinese:xyz@example.com/

console.log();

/*
url.toJSON()
Returns: <string>
The toJSON() method on the URL object returns the serialized URL.
 The value returned is equivalent to that of url.href and url.toString().
*/

const myURLs = [
    new URL('https://www.example.com'),
    new URL('https://test.example.org')
  ];
  console.log(JSON.stringify(myURLs));
  // Prints ["https://www.example.com/","https://test.example.org/"]