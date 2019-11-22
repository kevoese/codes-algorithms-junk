const events = require('events');

let eventEmitter = new events.EventEmitter();
let eventEmitter2 = new events.EventEmitter();

eventEmitter.setMaxListeners(1);

events.defaultMaxListeners = 30; //doesn't chane the set max listener called above

console.log('the max eventEmitter that is allowed by default is', eventEmitter.getMaxListeners());
console.log('the max eventEmitter2 that is allowed by default is', eventEmitter2.getMaxListeners());

eventEmitter
  .on('myevent', data => {
    console.log('event is triggered', data);
  })
  .addListener('myevent', data => {
    console.log('event is triggered using alias addlistener', data);
  })

  eventEmitter.emit("myevent", "the event")