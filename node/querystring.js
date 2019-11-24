const querystring = require('querystring');
// querystring.parse(str[, sep[, eq[, options]]])
// querystring.stringify(obj[, sep[, eq[, options]]])

/*
str <string> The URL query string to parse
sep <string> The substring used to delimit key and value pairs in the query string. Default: '&'.
eq <string>. The substring used to delimit keys and values in the query string. Default: '='.
options <Object>

decodeURIComponent <Function> The function to use when decoding percent-encoded characters in the query string. Default: querystring.unescape().
maxKeys <number> Specifies the maximum number of keys to parse. Specify 0 to remove key counting limitations. Default: 1000.
The querystring.parse() method parses a URL query string (str) into a collection of key and value pairs.

*/

console.log(querystring.parse('foo=bar&abc=xyz&abc=123'));
console.log();
console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));
console.log();
console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':')); // change sepearators



