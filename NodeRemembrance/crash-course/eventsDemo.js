import { EventEmitter } from 'events'

const myEmitter = new EventEmitter();


function helloWorldHandler(name) {
    console.log(`Hello World: ${name}`);
}

function welcomeBackHandler(name) {
    console.log(`Welcome back! ${name}`)
}

// Register event listeners
myEmitter.on('hello', helloWorldHandler)
myEmitter.on('welcome', welcomeBackHandler)

//Emit events
myEmitter.emit('hello', 'John')
myEmitter.emit('welcome', 'John')