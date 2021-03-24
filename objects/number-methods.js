let num = 69.691


// whatever number you put into toFixed(argument) will keep it after decimal
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 10 - 20
console.log(randomNum)


// Challange Area

// create a function that takes in the persons guess as argument, then have it generate random number, 

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randomNum

}

console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(5))


