(()=>{"use strict";let e=[{category:"Work",title:"Task 1",description:"Complete project report",dueDate:"2023-06-15",priority:"High",completed:!1},{category:"Personal",title:"Task 2",description:"Buy groceries",dueDate:"2023-06-18",priority:"Medium",completed:!1},{category:"Home",title:"Task 3",description:"Clean the house",dueDate:"2023-06-20",priority:"Low",completed:!0},{category:"Work",title:"Task 4",description:"Prepare presentation",dueDate:"2023-06-25",priority:"High",completed:!1},{category:"Personal",title:"Task 5",description:"Exercise for 30 minutes",dueDate:"2023-06-15",priority:"Medium",completed:!0}];const t=(e,t)=>e.reduce(((e,n)=>{const o=n[t];return e[o]=e[o]||[],e[o].push({...n}),e}),{});document.body.appendChild((()=>{const n=document.createElement("div");return n.classList="app-container",n.appendChild((()=>{const e=document.createElement("div");e.id="add-project-form-container";const t=document.createElement("form");t.id="project-form";const n=document.createElement("label");n.textContent="Project Name";const o=document.createElement("input");o.type="text",o.placeholder="Enter Project Name",o.required=!0;const d=document.createElement("button");return d.textContent="Add Project",d.type="button",t.appendChild(n),t.appendChild(o),t.appendChild(d),e.appendChild(t),d.addEventListener("click",(e=>{})),e})()),n.appendChild((()=>{const e=document.createElement("div");e.id="add-todo-form-container",document.createElement("form").id="add-todo-form";const t=document.createElement("lable");t.textContent="Title";const n=document.createElement("input");n.type="text",n.placeholder="Task title",n.required=!0;const o=document.createElement("label");o.textContent="Description";const d=document.createElement("input");d.type="text",d.placeholder="Enter description";const r=document.createElement("label");r.textContent="Due Date";const c=document.createElement("input");c.type="date";const i=document.createElement("label");i.textContent="Priority";const p=document.createElement("input");p.type="number",p.placeholder="Enter priority";const l=document.createElement("label");l.textContent="Completed";const a=document.createElement("input");a.type="checkbox";const m=document.createElement("button");return m.textContent="Add Task",m.type="button",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(d),e.appendChild(r),e.appendChild(c),e.appendChild(i),e.appendChild(p),e.appendChild(l),e.appendChild(a),e.appendChild(m),e})()),n.appendChild((e=>{console.log(t(e,"priority"));const n=document.createElement("div");n.classList="side-bar",n.innerHTML="";const o=Object.keys(t(e,"category"));for(let e=0;e<o.length;e++)n.innerHTML+=`<div>\n        </div><h1>${o[e]}</h1>\n        <button id="${o[e]}" >+</button>\n        </div>`;return n})(e)),n.appendChild((e=>{console.log(e);const t=document.createElement("div");t.classList="todo-container",t.innerHTML="";for(let n=0;n<e.length;n++)t.innerHTML+=`<div>\n            <p>${e[n].category}</p>\n            <p>${e[n].title}</p>\n            <p>${e[n].description}</p>\n            <p>${e[n].dueDate}</p>\n            <p>${e[n].priority}</p>\n            <p>${e[n].completed}</p>\n            <button class="delete-todo" id="${n}" >X</button>\n        </div>`;return t})(e)),n})())})();