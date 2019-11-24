/*
new URLSearchParams(obj)
obj <Object> An object representing a collection of key-value pairs
Instantiate a new URLSearchParams object with a query hash map.
The key and value of each property of obj are always coerced to strings.
*/

const params1 = new URLSearchParams({
  user: 'abc',
  query: ['first', 'second', 'third'],
});
console.log(params1.getAll('query'));
// Prints [ 'first,second' ]
console.log(params1.toString());
// Prints 'user=abc&query=first%2Csecond%2Cthird'

let params;

// Using an array
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second'],
]);
console.log(params.toString());
// Prints 'user=abc&query=first&query=second'

// Using a Map object
const map = new Map();
map.set('user', 'abc');
map.set('query', 'xyz');
params = new URLSearchParams(map);
console.log(params.toString());
// Prints 'user=abc&query=xyz'

// Using a generator function
function* getQueryPairs() {
  yield ['user', 'abc'];
  yield ['query', 'first'];
  yield ['query', 'second'];
}
params = new URLSearchParams(getQueryPairs());
console.log(params.toString());
// Prints 'user=abc&query=first&query=second'


/*
// Each key-value pair must have exactly two elements
new URLSearchParams([['user', 'abc', 'error']]);
// Throws TypeError [ERR_INVALID_TUPLE]:
//        Each query pair must be an iterable [name, value] tuple
*/

console.log();


const myURL = new URL('https://example.org/?a=b&c=d');
myURL.searchParams.forEach((value, name, searchParams) => {
  console.log(name, value, myURL.searchParams === searchParams);
});

console.log();

/*
urlSearchParams.sort()
Sort all existing name-value pairs in-place by their names
*/

const paramsSort = new URLSearchParams('query[]=abc&type=search&query[]=123');
paramsSort.sort();
console.log(paramsSort.toString());
// Prints query%5B%5D=abc&query%5B%5D=123&type=search