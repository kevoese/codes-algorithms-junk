// url.hash#
// <string>
// Gets and sets the fragment portion of the URL.

const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);

myURL.hash = 'baz';
console.log(myURL.href);

myURL.hash = 5647;
console.log(myURL.href);

myURL.hash = 56.47;
console.log(myURL.href);