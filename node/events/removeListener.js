const events = require('events');

let eventEmitter = new events.EventEmitter();

let listenCount = 0;
let listenLimit = 5;

const dataListener = data => {
  console.log('event is triggered', data);
  listenCount++;
};



eventEmitter.on('myevent', dataListener);

eventEmitter.on('exit', data => {
  console.log('exited');
});

eventEmitter.on('remove', data => {
    eventEmitter.removeListener('myevent', dataListener);
    console.log('removed');
  });

let interval = setInterval(() => {
    console.log();
  eventEmitter.emit('myevent', 'running event');
  if(listenCount === listenLimit) {
    eventEmitter.emit('remove');
  }
  console.log();
}, 1000);

// setTimeout(() => {
//   clearInterval(interval);
//   eventEmitter.emit('exit', 'exited');
// }, 6000);
