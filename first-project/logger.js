const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('log', (message)=>{
    console.log(message)
})

emitter.emit('log', 'testando...')