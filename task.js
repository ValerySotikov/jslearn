export default class CreateTask {
  constructor ( {todolist, addButton, deleteButton} ) {
      this.todolist = todolist;
      this.addButton = addButton;
      this.deleteButton = deleteButton;
      this.initialize();
  }

  initialize() {
      let task = document.createElement('div');
      task.className = 'task';
      this.todolist.appendChild(task);
      
      let input = document.createElement('input');
      input.className = "taskInput";
      input.textContent = "Your task";
      task.appendChild(input);

      let saveButton = this.createButton("Save", "save");
      saveButton.addEventListener("click", this.saveTask);
      saveButton.disabled = false;
      task.appendChild( saveButton );

      let editButton = this.createButton("Edit", "edit");
      editButton.addEventListener("click", this.editTask);
      task.appendChild( editButton );

      let removeButton = this.createButton("Delete", "remove");
      removeButton.addEventListener("click", this.deleteTask);
      task.appendChild( removeButton );
  }

  createButton(text, className) {
    let button = document.createElement('button');
    button.className = className;
    button.textContent = text;
    button.disabled = true;
    return button;
  }

  saveTask() {
    document.querySelector(".add").disabled = false;
    document.querySelector(".delete").disabled = false;

    let parentNode = event.target.parentNode;
    event.target.disabled = true;

    for (let i = 0; i < parentNode.childNodes.length; i++) {
        let childNode = parentNode.childNodes[i];
        if (childNode.className === "taskInput") childNode.disabled = true;
        if (childNode.className === "edit") childNode.disabled = false;
        if (childNode.className === "remove") childNode.disabled = false
    }
  }

  editTask() {
    document.querySelector(".add").disabled = true;
    document.querySelector(".delete").disabled = true;

    let parentNode = event.target.parentNode;
    event.target.disabled = false;

    for (let i = 0; i < parentNode.childNodes.length; i++) {
        let childNode = parentNode.childNodes[i];
        if (childNode.className === "taskInput") childNode.disabled = false;
        if (childNode.className === "edit") childNode.disabled = true;
        if (childNode.className === "remove") childNode.disabled = true;
        if (childNode.className === "save") childNode.disabled = false;
    }
  }

  deleteTask() {
    document.querySelector(".todolist").removeChild(event.target.parentNode);
  }
}