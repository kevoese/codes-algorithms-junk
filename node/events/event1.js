const events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter
  .on('myevent', data => {
    console.log('event is triggered', data);
  })
  .addListener('myevent', data => {
    console.log('event is triggered using alias addlistener', data);
  })
  .once('myevent', data => {
    console.log(
      'event is triggered using once listener. it is fired once',
      data
    );
  })
  .prependListener('myevent', data => {
    console.log('fired first', data);
  })
  .prependOnceListener('myevent', data => {
    console.log('fired first just once', data);
  });

eventEmitter.on('exit', data => {
  console.log('exited');
});

let interval = setInterval(() => {
  eventEmitter.emit('myevent', 'running event');
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  eventEmitter.emit('exit', 'exited');
}, 6000);
