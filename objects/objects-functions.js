let myBook = {
    title: '1984', 
    author: 'Gerorge Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History', 
    author: 'Howard Zinn',
    pageCount: 723
} 

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)


// Challange area

// create function - take fahrenheit in - return object with all three
// let fahrenheit = 50
// let celsius = (fahrenheit - 32) * 5/9
// let kelvin = celsius + 273.15

let converFahrenheit = function (fahrenheit) {
    return {
        fahrenheit : fahrenheit, 
        kelvin : (fahrenheit + 459.67) * (5 / 9),
        celsius : (fahrenheit - 32) * (5 / 9)
    }
}

 let temps = converFahrenheit(74)
 console.log(temps)
 