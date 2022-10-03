const todoform = document.getElementById("todo-form");
const todoinput = document.querySelector("#todo-form input");
const todolist = document.getElementById("todo-list");

let todos = [];

function savetodo(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deletetodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id != parseInt(li.id));
    savetodo();
}

function painttodo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deletetodo);
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
}
function todosubmithandler(event){
    event.preventDefault();
    const newtodo = todoinput.value;
    todoinput.value = "";
    const newtodoobj = {
        text:newtodo,
        id: Date.now(),
    };
    todos.push(newtodoobj);
    painttodo(newtodoobj);
    savetodo();
}

const savedtodos = localStorage.getItem("todos");

if (savedtodos !== null){
    const parsedtodos = JSON.parse(savedtodos);
    todos = parsedtodos;
    parsedtodos.forEach(painttodo);
}
todoform.addEventListener("submit", todosubmithandler);