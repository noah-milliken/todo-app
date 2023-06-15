import { Task } from "./task"

class Project {
    constructor(category, tasks = []) {
        this.category = category;
        this.tasks = tasks;
    }
    addTask(title, priority, dueDate, notes) {
        const task = new Task(title, priority, dueDate, notes)
        this.tasks.push(task)
    }
    deleteTask(index) {
        if (this.tasks.length < 0) {
            return
        } else {
            this.tasks.splice(index, 1)
        }
    }
}
let projects = []
const newProject = new Project('House Work')
const oldProject = new Project('Boat Work')
const wifeProject = new Project('Wife Project')
projects.push(newProject, oldProject, wifeProject)

newProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
newProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
oldProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
oldProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')
oldProject.addTask('Sweep', 'low', 'tomorrow', 'Sweep the livingroom and bathroom')



export {
    projects, Project
}

