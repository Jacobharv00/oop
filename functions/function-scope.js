// Global scope (convertFahrenheitToCelsius, denver, breckenridge)
    // Local scope(fahrenheit, celsius)
        // Local scope (isFreezing)


let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let denver = convertFahrenheitToCelsius(32)
let breckenridge = convertFahrenheitToCelsius(68)
console.log(denver)
console.log(breckenridge)