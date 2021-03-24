let isAccountLocked = false
let userRole = 'user'


if (isAccountLocked) {
    console.log( 'Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}


// Challange Area

// It is freezing outside!
// It is hot outside!
// Go for it. It is pretty nice.

let temp = 110

if (temp <= 32) {
    console.log('It is freezing outside')
} else if ( temp >= 110) {
    console.log('It is hot outside')
} else {
    console.log('Go for it. It is pretty nice out')
}