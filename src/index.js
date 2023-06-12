import { form } from "./view"
import { todoModel } from "./model"

function component() {

    let model = todoModel()
    model.deleteTodo(10)
    console.log(model.sortBy(model.todos, 'category'))

    const element = document.createElement('div')
    element.appendChild(form())
    document.addEventListener('submit', (e) => {
        e.preventDefault()
        const category = document.getElementById('categoryInput').value
        const title = document.getElementById('titleInput').value
        const description = document.getElementById('descriptionInput').value
        const dueDate = document.getElementById('dueDateInput').value
        const priorityInput = document.getElementById('priorityInput').value
        const completed = document.getElementById('completedInput').value

        model.addTodo(category, title, description, dueDate, priorityInput, completed)
        console.log(model.sortBy(model.todos, 'category'))
    })
    return element
}

document.body.appendChild(component())

