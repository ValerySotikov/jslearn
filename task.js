export default class CreateTask {
  constructor ( {todolist} ) {
      this.todolist = todolist;
      this.initialize();
  }

  initialize() {
      let task = document.createElement('div');
      task.className = 'task';
      this.todolist.appendChild(task);
      console.log(this.todolist)
  }
}