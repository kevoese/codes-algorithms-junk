const path = require('path');

const normalize = path.normalize('this/next/up/upper//../../back/../file');
const join = path.join('/node', 'filesystem', 'readSync');
const resolve = path.resolve(
  '/node/childProcess',
  '../../node/filesytem',
  '../../../code-algorithms-junk/node/dns.js'
);
const isAbsolute = path.isAbsolute('/node/path.js');
const relative = path.relative('/node/path.js', '/node/events/listenCount.js');
const dirname = path.dirname('/node/events/listenCount.js');
const basename = path.basename('/node/events/listenCount.js');
const parse = path.parse(resolve);
const format = path.format({
  dir: '/code-algorithms-junk/node',
  base: 'os.js',
});

console.log({
  normalize,
  join,
  resolve,
  isAbsolute,
  relative,
  dirname,
  basename,
  separator: path.sep,
  parse,
  format
});
