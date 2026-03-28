// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const input = document.querySelector('dialog input');

function renderList() {
  ul.innerHTML = '';

  todoList.forEach(item => {
    const li = document.createElement('li');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
    });

    // Label
    const label = document.createElement('label');
    label.htmlFor = `todo-${item.id}`;
    label.textContent = item.task;

    // Poistopainike
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      const index = todoList.indexOf(item);
      todoList.splice(index, 1);
      renderList();
    });

    li.appendChild(deleteBtn);
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (input.value.trim() !== '') {
    const newId =
      todoList.length > 0 ? Math.max(...todoList.map(t => t.id)) + 1 : 1;
    const newItem = {
      id: newId,
      task: input.value,
      completed: false,
    };

    todoList.push(newItem);
    renderList();
    input.value = '';
    dialog.close();
  }
});

// Ensimmäinen piirto
renderList();
