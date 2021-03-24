let temp = 150

// Logical And Operator

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
}

// Logical Or Operator

if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
}


// Challange Area

 
let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, Offer up anything on the menu.

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('You both are vegan, so here is our vegan menu.')
} else if (isGuestOneVegan || isGuestOneVegan) {
    console.log('Your lady is vegan, here is a steak for you and dust for her.')
} else {
    console.log('You can eat anything on the menu!')
}