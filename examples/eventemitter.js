'use strict';

const EventEmitter = require('node:events');

const emisor = new EventEmitter();

emisor.on('Lamada de telefono', function(){
    console.log('ring ring')
})

emisor.once('Llamada de telefono', function(){
    console.log('bar bar')
})

emisor.emit('llamada de telefono', 'hermana')
emisor.emit('llamada de telefono', 'hermana')
emisor.emit('llamada de telefono', 'hermana')