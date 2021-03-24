const todos = [{
    text: 'Shop',
    completed: false
}, {
    text: 'Clean',
    completed: true
}, {
   text: 'poop',
    completed: true
}, {
   text: 'Eat',
    completed: false
}, {
    text: 'Sleep',
    completed: true

}] 



const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
        return -1
        } else if (!b.completed && a.completed) {
        return 1
        } else {
            return 0
        }
        
    })

}
// returns list from false to true 



const deleteToDo = function (todos, toDoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === toDoText.toLowerCase()
    })
    
    if (index > -1) {
        todos.splice(index, 1)
    }
}


const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
       return !todo.completed 
   })

}


sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))


//deleteToDo(todos, 'Sleep')
//console.log(todos)




