import { addProjectForm } from "./addProjectForm"
import { addTodoForm } from "./addTodoForm"
import { render } from './render'
import { projects } from "./project"

const Component = () => {
    const element = document.createElement('div')
    element.appendChild(addProjectForm())
    element.appendChild(addTodoForm())
    element.appendChild(render(projects))
    return element
}

document.body.appendChild(Component())

