

const render = (projects) => {
    const main = document.createElement('div')
    const sidebar = document.createElement('div')
    const hero = document.createElement('div')
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i]
        const categoryElement = document.createElement('div')
        const heroElement = document.createElement('div')

        categoryElement.innerHTML = `<div></div><h1>${project.category}</h1><button>Add Task</button></div>`
        heroElement.innerHTML = `<div></div><h3>${project.category}</h3></div>`
        sidebar.appendChild(categoryElement)
        hero.appendChild(heroElement)

    }



    main.appendChild(hero)
    main.appendChild(sidebar)
    return main

}

export { render }