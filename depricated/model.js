

const todoFactory = (category, title, description, dueDate, priority, completed = false) => {
    return { category, title, description, dueDate, priority, completed }
}

const todoModel = (callback) => {
    let todos = [{
        category: 'Work',
        title: 'Task 1',
        description: 'Complete project report',
        dueDate: '2023-06-15',
        priority: 'High',
        completed: false
    },
    {
        category: 'Personal',
        title: 'Task 2',
        description: 'Buy groceries',
        dueDate: '2023-06-18',
        priority: 'Medium',
        completed: false
    },
    {
        category: 'Home',
        title: 'Task 3',
        description: 'Clean the house',
        dueDate: '2023-06-20',
        priority: 'Low',
        completed: true
    },
    {
        category: 'Work',
        title: 'Task 4',
        description: 'Prepare presentation',
        dueDate: '2023-06-25',
        priority: 'High',
        completed: false
    },
    {
        category: 'Personal',
        title: 'Task 5',
        description: 'Exercise for 30 minutes',
        dueDate: '2023-06-15',
        priority: 'Medium',
        completed: true
    }]
    const addTodo = (category, title, description, dueDate, priority, completed) => {
        const newTodo = todoFactory(category, title, description, dueDate, priority, completed)
        todos.push(newTodo)
        interacted()
    }
    const deleteTodo = (i) => {
        interacted()
        return todos.splice(i, 1)
    }
    const sortBy = (array, key) => {
        interacted()
        return array.reduce((result, currentValue) => {
            const groupKey = currentValue[key]
            result[groupKey] = result[groupKey] || []
            result[groupKey].push({ ...currentValue })
            return result
        }, {})
    }

    const interacted = () => {
        console.log("interacted")
        if (callback) {
            callback()
        }
    }

    const alert = (message) => {
        alert(message)
    }

    return {
        todos,
        addTodo,
        deleteTodo,
        sortBy

    }

}


export {
    todoModel, todos
}


