(()=>{"use strict";let e=null;!function(){document.addEventListener("click",(e=>{"submit-todo"===e.target.id&&(console.log("banana"),t(e))})),e=(e=>{let t=[{category:"Work",title:"Task 1",description:"Complete project report",dueDate:"2023-06-15",priority:"High",completed:!1},{category:"Personal",title:"Task 2",description:"Buy groceries",dueDate:"2023-06-18",priority:"Medium",completed:!1},{category:"Home",title:"Task 3",description:"Clean the house",dueDate:"2023-06-20",priority:"Low",completed:!0},{category:"Work",title:"Task 4",description:"Prepare presentation",dueDate:"2023-06-25",priority:"High",completed:!1},{category:"Personal",title:"Task 5",description:"Exercise for 30 minutes",dueDate:"2023-06-15",priority:"Medium",completed:!0}];const o=()=>{console.log("interacted"),e&&e()};return{todos:t,addTodo:(e,n,i,d,r,l)=>{const u=((e,t,o,n,i,d=!1)=>({category:e,title:t,description:o,dueDate:n,priority:i,completed:d}))(e,n,i,d,r,l);t.push(u),o()},deleteTodo:e=>(o(),t.splice(e,1)),sortBy:(e,t)=>(o(),e.reduce(((e,o)=>{const n=o[t];return e[n]=e[n]||[],e[n].push({...o}),e}),{}))}})((function(){o()}));const t=t=>{t.preventDefault();const o=document.getElementById("categoryInput").value,n=document.getElementById("titleInput").value,i=document.getElementById("descriptionInput").value,d=document.getElementById("dueDateInput").value,r=document.getElementById("priorityInput").value,l=document.getElementById("completedInput").value;e.addTodo(o,n,i,d,r,l),console.log(e.sortBy(e.todos,"category"))};function o(e){const t=document.getElementById("todos"),o=document.createElement("div");o.innerHTML=(e=>{let t="";return e.todos.forEach(((e,o)=>{t+=`<div class="card">\n      <h1>${e.title}</h1>\n      <h2>${e.description}</h2>\n      <h2>${e.dueDate}</h2>\n      <h3>${e.priority}</h3>\n      <h4>${e.completed}</h4>\n      <button data-index="${o}" id="${o}">Button for ${o}</button>\n    </div>`})),t})(e),t.appendChild(o)}document.body.appendChild(function(e){const t=document.createElement("div");return t.setAttribute("id","todos"),t.appendChild((()=>{const e=document.createElement("div");return e.innerHTML='\n    <form id="todoForm">\n  <label for="category">Category:</label>\n  <input type="text" id="categoryInput" name="category" value="Coding" required>\n  \n  <label for="title">Title:</label>\n  <input type="text" id="titleInput" name="title" value="Coding" required>\n  \n  <label for="description">Description:</label>\n  <input type="text" id="descriptionInput" name="description" value="Practice factory functions" required>\n  \n  <label for="dueDate">Due Date:</label>\n  <input type="date" id="dueDateInput" name="dueDate"  value="04-07-2023" >\n \n  \n  <label for="priority">Priority:</label>\n  <select id="priorityInput" name="priority" required>\n    <option value="high">High</option>\n    <option value="medium">Medium</option>\n    <option value="low">Low</option>\n  </select>\n  \n  <label for="completed">Completed:</label>\n  <input type="checkbox" id="completedInput" name="completed">\n  <button id="submit-todo">Submit Todo</button>\n</form>\n<div id=\'todos\'></div>\n    ',e})()),t}()),o(e)}()})();