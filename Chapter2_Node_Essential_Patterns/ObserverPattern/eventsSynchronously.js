const EventEmitter = require('events').EventEmitter;

  class SyncEmit extends EventEmitter {
    constructor() {
super();
      this.emit('go');
    }
}
  const syncEmit = new SyncEmit();
  syncEmit.on('go', () => console.log('GOOOOOOO'));
// the event is produced synchronously and the listener is registered after the event was already sent
// the code will print nothing 
