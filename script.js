import CreateTask from "./task.js";

let todolist = document.querySelector('.todolist');

let addButton = document.querySelector('.add');
addButton.addEventListener('click', addTask);

let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', deleteTask);

function addTask() {
    addButton.disabled = true;
    deleteButton.disabled = true;
    new CreateTask({todolist, addButton, deleteButton});
}

function deleteTask() {
    todolist.removeChild( todolist.lastChild );
}