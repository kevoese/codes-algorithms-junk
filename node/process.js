console.log(process.version);

/*
process.nextTick() adds callback to the "next tick queue". 
This queue is fully drained after the current operation on the
 JavaScript stack runs to completion and before the event loop is allowed to continue.
*/
console.log('\nstart');
process.nextTick(() => {
  console.log('\nnextTick callback');
});
console.log('\nscheduled');

// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

console.log(`\nCurrent directory: ${process.cwd()}`);

process.env.foo = 'bar';
// console.log(`\n Env variables:`, process.env);

console.log('\nexec arg', process.execArgv);
// console.log(process.mainModule); // alternative way of retrieving require.main
// console.log(process.memoryUsage()); // returns an object describing the memory usage of the Node.js process measured in bytes.

process.stdout.write('\nwriting to output');

console.log(`\nThis process is pid ${process.pid}`);



