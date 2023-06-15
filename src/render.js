import { sortBy } from "./project"

const renderSidebar = (array) => {
    console.log(sortBy(array, 'priority'))
    const sidebarElement = document.createElement('div')
    sidebarElement.classList = 'side-bar'
    sidebarElement.innerHTML = ''

    const catagories = Object.keys(sortBy(array, 'category'))

    for (let i = 0; i < catagories.length; i++) {
        sidebarElement.innerHTML += `<div class="project-category">
        <h1>${catagories[i]}</h1>
        <button id="${catagories[i]}" >+</button>
        </div>`
    }

    const addProjectButton = document.createElement('button')
    addProjectButton.id = 'add-project-btn'
    addProjectButton.textContent = "+"
    sidebarElement.appendChild(addProjectButton)
    addProjectButton.addEventListener('click', (e) => {
        addProjectButton.classList.toggle('hidden')
        document.getElementById('add-project-form-container').classList.toggle('hidden')
    })

    return sidebarElement
}

const renderMain = (array) => {
    console.log(array)
    const mainElement = document.createElement('div')
    mainElement.classList = 'todo-container'
    mainElement.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        mainElement.innerHTML += `<div class="todo-item">
            <p>${array[i].category}</p>
            <p>${array[i].title}</p>
            <p>${array[i].description}</p>
            <p>${array[i].dueDate}</p>
            <p>${array[i].priority}</p>
            <p>${array[i].completed}</p>
            <button class="delete-todo" id="${i}" >X</button>
            <button class="edit-todo" id="${i}" >edit</button>
        </div>`
    }



    return mainElement


}






export { renderSidebar, renderMain }