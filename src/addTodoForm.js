import { projects, Project } from "./project";

const addTodoForm = () => {
    const addTodoFormContainer = document.createElement('div')
    addTodoFormContainer.id = 'add-todo-form-container'
    const addTodoForm = document.createElement('form')
    addTodoForm.id = 'add-todo-form'

    const titleInputLable = document.createElement('lable')
    titleInputLable.textContent = 'Title'

    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.placeholder = 'Task title'
    titleInput.required = true

    const descriptionInputLabel = document.createElement('label');
    descriptionInputLabel.textContent = 'Description';

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.placeholder = 'Enter description';

    const dueDateInputLabel = document.createElement('label');
    dueDateInputLabel.textContent = 'Due Date';

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';

    const priorityInputLabel = document.createElement('label');
    priorityInputLabel.textContent = 'Priority';

    const priorityInput = document.createElement('input');
    priorityInput.type = 'number';
    priorityInput.placeholder = 'Enter priority';

    const completedInputLabel = document.createElement('label');
    completedInputLabel.textContent = 'Completed';

    const completedInput = document.createElement('input');
    completedInput.type = 'checkbox';

    const addTaskFormButton = document.createElement('button')
    addTaskFormButton.textContent = "Add Task"
    addTaskFormButton.type = "button"


    addTodoFormContainer.appendChild(titleInputLable)
    addTodoFormContainer.appendChild(titleInput)
    addTodoFormContainer.appendChild(descriptionInputLabel);
    addTodoFormContainer.appendChild(descriptionInput);
    addTodoFormContainer.appendChild(dueDateInputLabel);
    addTodoFormContainer.appendChild(dueDateInput);
    addTodoFormContainer.appendChild(priorityInputLabel);
    addTodoFormContainer.appendChild(priorityInput);
    addTodoFormContainer.appendChild(completedInputLabel);
    addTodoFormContainer.appendChild(completedInput);
    addTodoFormContainer.appendChild(addTaskFormButton)

    addTaskFormButton.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('hello')

    })

    return addTodoFormContainer
}

export { addTodoForm }