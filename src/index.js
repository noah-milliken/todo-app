import { form, todos } from "./view"
import { todoModel } from "./model"
let todo = null
function component() {
    function handleChange() {
        renderTodos()
    }
    document.addEventListener('click', (event) => {
        if (event.target.id === "submit-todo") {
            console.log('banana')
            addTodoItem(event)
        }
    })


    // set up the state that should be persisitant in component
    todo = todoModel(handleChange)


    function rendercurrentView(todo) {
        // call the renderCurrentView and pass it the current persistant state and return view for future interactions
        const element = document.createElement('div')
        element.setAttribute('id', 'todos')
        element.appendChild(form())

        // make the rendered view respond to events and call an update if the persistant state for the component changes.

        return element
    }
    const addTodoItem = ((event) => {
        event.preventDefault()
        const category = document.getElementById('categoryInput').value
        const title = document.getElementById('titleInput').value
        const description = document.getElementById('descriptionInput').value
        const dueDate = document.getElementById('dueDateInput').value
        const priorityInput = document.getElementById('priorityInput').value
        const completed = document.getElementById('completedInput').value
        todo.addTodo(category, title, description, dueDate, priorityInput, completed)
        console.log(todo.sortBy(todo.todos, 'category'))
    })

    function renderTodos(todo) {
        const element = document.getElementById('todos')
        const todoDiv = document.createElement('div')
        todoDiv.innerHTML = todos(todo)
        element.appendChild(todoDiv)
    }

    document.body.appendChild(rendercurrentView(todo))
    renderTodos(todo)
    // return element
}

component()




// - we need something that takes form inputes
// - we need something that knows when we update state and re-renderes our todos
// - we want somthing responsable for the html of what the todo's look like
