let todoList = [{
  name: 'Make coffee',
  dueDate: '2024-10-15'
}, {
  name: "Code",
  dueDate: "2024-10-16"
}
];

renderTodoList();

function addTask() {
  let inputElement = document.querySelector('.js-task-input');
  let name = inputElement.value;

  let dateInputElement = document.querySelector('.js-due-date-input');
  let dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  }
  );
  console.log(todoList);
  inputElement.value = '';

  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  for (i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; //Destructuring

    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1)
        renderTodoList();
        " class= "delete-todo-button">Delete
      </button>
      `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
