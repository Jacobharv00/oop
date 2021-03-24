let myBook = {
    title: '1984', 
    author: 'Gerorge Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)


// Challange area
// create object and then return a string 
// name, age, location
// Example of string would be. Andrew is 27 and lives in Philadelphia.
// increase age by one and print message again.


let person = {
    name: 'Jake',
    age: 30,
    location: 'Breckenridge'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)



