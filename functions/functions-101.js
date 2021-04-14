// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()


let square = function (num) {
    let result = num * num 
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challange Area

// convertFahrenheitToCelsius

// Call a couple of time (32 => 0) (68 => 20)

// Print converted values
//let fahrenheit = 50
//let celsius = (fahrenheit - 32) * 5/9


let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let denver = convertFahrenheitToCelsius(32)
let breckenridge = convertFahrenheitToCelsius(68)
console.log(denver)
console.log(breckenridge)

