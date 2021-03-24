let name = '  Jacob Harvey  ' 

// length property

console.log(name.length)

// convert to upper case

console.log(name.toUpperCase())

//convert to lower case

console.log(name.toLowerCase())


// Includes method
let password = 'abc123jfhfjfhfj098'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())

// Challange area

//isValidPassword
// only return true if length is more than 8 and it doesn't contain the word password



let isValidPassword = function (password) {
    return (password.length > 8 && !password.includes('password')) 
}
    

console.log(isValidPassword('asdfp')) // false
console.log(isValidPassword('abc123@$$fuck99')) //true
console.log(isValidPassword('dkfkhkhfdfkjpassword')) //false

