const todosList = [
    {
        id: 1,
        todo: 'Watch TV'
    },
    {
        id: 2,
        todo: 'Play Cricket'
    },
    {
        id: 3,
        todo: 'Play Football'
    },
]

export async function fetchAllTodos(){
    await new Promise((resolve)=> setTimeout(resolve,1000))

    return todosList
}

export async function AddNewTodo(todoName) {
    await new Promise((resolve)=> setTimeout(resolve,1000))

    const newlyAddedTodo = {
        todo: todoName,
        id: todosList.length + 1
    }

    todosList.push(newlyAddedTodo)

    return newlyAddedTodo
}