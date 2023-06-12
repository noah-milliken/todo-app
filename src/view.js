
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
  <input type="date" id="dueDateInput" name="dueDate"  value="04-07-2023" required>
  
  <label for="priority">Priority:</label>
  <select id="priorityInput" name="priority" required>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
  
  <label for="completed">Completed:</label>
  <input type="checkbox" id="completedInput" name="completed">
  
  <button type="submit">Add Todo</button>
</form>
    `
  return formElement
}

export { form }
