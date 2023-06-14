
const form = () => {
  const formElement = document.createElement('div')
  formElement.innerHTML = `
    <form id="todoForm">
  <label for="category">Category:</label>
  <input type="text" id="categoryInput" name="category" value="Coding" required>
  
  <label for="title">Title:</label>
  <input type="text" id="titleInput" name="title" value="Coding" required>
  
  <label for="description">Description:</label>
  <input type="text" id="descriptionInput" name="description" value="Practice factory functions" required>
  
  <label for="dueDate">Due Date:</label>
  <input type="date" id="dueDateInput" name="dueDate"  value="04-07-2023" >
 
  
  <label for="priority">Priority:</label>
  <select id="priorityInput" name="priority" required>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
  
  <label for="completed">Completed:</label>
  <input type="checkbox" id="completedInput" name="completed">
  <button id="submit-todo">Submit Todo</button>
</form>
<div id='todos'></div>
    `
  return formElement
}
const todos = (todo) => {
  let todoDiv = ``
  const todoArr = todo.todos
  todoArr.forEach((todo, index) => {
    todoDiv += `<div class="card">
      <h1>${todo.title}</h1>
      <h2>${todo.description}</h2>
      <h2>${todo.dueDate}</h2>
      <h3>${todo.priority}</h3>
      <h4>${todo.completed}</h4>
      <button data-index="${index}" id="${index}">Button for ${index}</button>
    </div>`
  })
  return todoDiv
}

// const todos = (todos) => {
//   console.log(todos)
//   const list = todos.todos.map((todo) => {
//     return `<li >${todo.title}</li>`
//   })
//   return `<ul>${list}</ul>`
// }
export { form, todos }
