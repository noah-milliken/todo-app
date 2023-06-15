

const todoFactory = (category, title, description, dueDate, priority, completed = false) => {
    return { category, title, description, dueDate, priority, completed }
}


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
    // interacted()
}
const deleteTodo = (i) => {
    // interacted()
    return todos.splice(i, 1)
}
const sortBy = (array, key) => {
    // interacted()
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



export { todos, sortBy }








// class Project {
//     constructor(category, tasks = []) {
//         this.category = category;
//         this.tasks = tasks;
//     }
//     addTask(title, priority, dueDate, notes) {
//         const task = new Task(title, priority, dueDate, notes)
//         this.tasks.push(task)
//     }

//     deleteTask(index) {
//         if (this.tasks.length < 0) {
//             return
//         } else {
//             this.tasks.splice(index, 1)
//         }
//     }
//     allTasks(tasks) {

//     }
// }
// let projects = []
// const newProject = new Project('House Work')
// const oldProject = new Project('Boat Work')
// const workProject = new Project('work Project')
// projects.push(newProject, oldProject, workProject)

// newProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
// newProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
// oldProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
// oldProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
// oldProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
// console.log(projects)

// export {
//     projects, Project
// }

