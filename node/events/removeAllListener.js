//removeALlListeners

const events = require('events');

let eventEmitter = new events.EventEmitter();

let listenCount = 0;
let listenLimit = 5;

eventEmitter
  .on('myevent', data => {
    console.log('event is triggered', data);
  })
  .addListener('myevent2', data => {
    console.log('event is triggered using alias addlistener', data);
  })
  .prependListener('myevent', data => {
    console.log('fired first', data);
  })


eventEmitter.on('exit', data => {
  console.log(data);
});

let interval = setInterval(() => {
  eventEmitter.emit('myevent', 'running event');
  eventEmitter.emit('myevent2', 'running event');
  listenCount++
  if(listenCount > 2) {
    eventEmitter.removeAllListeners("myevent");
  }
  if(listenCount > 4) {
    eventEmitter.removeAllListeners(); // remove all including the exit
  }
  console.log(">")
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  eventEmitter.emit('exit', 'exited');
}, 8000);
