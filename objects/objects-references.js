let myAccount = {
    name: 'Jacob',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
   account.expenses = account.expenses + amount
    console.log(account)
}


let addIncome = function (account, income) {
    account.income = account.income + income
    
}


let resetAccount = function (account) {
   account.expenses = 0
   account.income = 0
}


let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

// Add these 3 functions

// addIncome

// resetAccount

// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses. 


// Suggestions of using functions
// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary



addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))