const EventEmitter = require('events').EventEmitter;
const myEvent = new EventEmitter();


myEvent.on('gretting', function(x){
  console.log(x)
})
setTimeout(() => myEvent.emit('gretting', 'hello'), 2000)
setTimeout(() => myEvent.emit('gretting', 'world'), 2000)
