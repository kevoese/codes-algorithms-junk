const os = require('os');

console.log({cpus: os.cpus()});
console.log();
console.log({platform: os.platform(), userinfo: os.userInfo()});

