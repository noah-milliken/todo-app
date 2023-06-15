import './style.css'
import { addProjectForm } from "./addProjectForm"
import { addTodoForm } from "./addTodoForm"
import { todos } from "./project"
import { renderSidebar, renderMain } from './render'

const Component = () => {

    const element = document.createElement('div')
    element.classList = 'app-container'
    element.appendChild(addProjectForm())
    element.appendChild(addTodoForm())
    element.appendChild(renderSidebar(todos))
    element.appendChild(renderMain(todos))
    return element
}
renderMain(todos)
export { Component }



document.body.appendChild(Component())

