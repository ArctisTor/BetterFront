//STANDARD export
// function generateRandomNumber() {

//     return Math.floor((Math.random() * 100) + 1)
// }

// function celciusToFahrenheit(celcius) {
//     var c = (celcius * (9/5)) + 32.0
//     return c.toFixed(3)
// }

// function fahrenheitToCelcuis(fahrenheit) {
//     var f = (fahrenheit - 32.0) * (5/9)
//     return f.toFixed(3)
// }

// module.exports = {
//     generateRandomNumber, 
//     celciusToFahrenheit, 
//     fahrenheitToCelcuis
// };

//ES Module export
export const generateRandomNumber = () => {
    return Math.floor((Math.random() * 100) + 1)
}

export const celciusToFahrenheit = (celcius) => {
    var c = (celcius * (9/5)) + 32.0
    return c.toFixed(3)
}

export const fahrenheitToCelcuis = (fahrenheit) => {
    var f = (fahrenheit - 32.0) * (5/9)
    return f.toFixed(3)
}