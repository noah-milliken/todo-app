import { addTodo, todoModel, todos } from "./project"

const addProjectForm = () => {
  const addProjectFormContainer = document.createElement('div')
  addProjectFormContainer.classList.add('hidden')
  addProjectFormContainer.id = 'add-project-form-container'
  const projectForm = document.createElement('form')
  projectForm.id = 'project-form'

  const ProjectNameInputName = document.createElement('label')
  ProjectNameInputName.textContent = 'Project Name'

  const projectNameInput = document.createElement('input')
  projectNameInput.type = 'text'
  projectNameInput.placeholder = 'Enter Project Name'
  projectNameInput.required = true

  const projectNameSubmitButton = document.createElement('button')
  projectNameSubmitButton.textContent = 'Add Project'
  projectNameSubmitButton.type = "button"

  projectForm.appendChild(ProjectNameInputName);
  projectForm.appendChild(projectNameInput);
  projectForm.appendChild(projectNameSubmitButton)

  addProjectFormContainer.appendChild(projectForm);


  projectNameSubmitButton.addEventListener('click', (e) => {
    e.preventDefault()
    addTodo('Any')
    addProjectFormContainer.classList.toggle('hidden')
    //document.getElementById('add-project-button').classList.toggle('hidden')
    console.log(todos)

  })


  return addProjectFormContainer
}

export { addProjectForm };
