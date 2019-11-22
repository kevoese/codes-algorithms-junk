const events = require('events');


let func = data => {
    console.log('event is triggered using alias addlistener', data);
  }

let eventEmitter = new events.EventEmitter();
eventEmitter
  .on('myevent', data => {
    console.log('event is triggered', data);
  })
  .addListener('myevent', data => {
    console.log('event is triggered using alias addlistener', data);
  })
  .addListener('data', data => {
    console.log('data is ', data);
  })
  .addListener('myevent', func)

eventEmitter.emit('myevent', 'the event');
eventEmitter.emit('data', 'the event');

let names = eventEmitter.eventNames(); // names of events having listeners ready to listen to them

console.log('names >>>', names);

let count = eventEmitter.listenerCount('myevent'); //number of listeners for a particular event

console.log('count', count);

let listeners = eventEmitter.listeners('myevent');

console.dir( listeners);
