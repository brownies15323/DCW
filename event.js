let events = Require('events')
let eventEmitter = new events.EventEmitter()

let callback = () => console.log("foo")

eventEmitter.on('foo',() => callback)

eventEmitter.emit('foo')