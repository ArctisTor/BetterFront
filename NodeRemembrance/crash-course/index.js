console.log('Welcome back!')

//Default way to export
//const utilis = require('./utilis')
//const {generateRandomNumber, celciusToFahrenheit} = require('./utilis') //alternative approach
//var randomNumber = utilis.generateRandomNumber();

//console.log(`Random Number : ${randomNumber}`);
//console.log(`Random Number: ${randomNumber} as celcius to fahrenheit ${utilis.celciusToFahrenheit(randomNumber)}`)
//console.log(`Random Number: ${randomNumber} as fahrenheit to celcius ${utilis.fahrenheitToCelcuis(randomNumber)}`)

//ES Module
import { generateRandomNumber, celciusToFahrenheit, fahrenheitToCelcuis } from "./utilis.js"
var randomNumber = generateRandomNumber()
console.log(`Random Number: ${randomNumber}`)
console.log(`Random Number: ${randomNumber} as celcius to fahrenheit ${celciusToFahrenheit(randomNumber)}`)
console.log(`Random Number: ${randomNumber} as fahrenheit to celcius ${fahrenheitToCelcuis(randomNumber)}`)