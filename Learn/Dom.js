const tasks = JSON.parse(localStorage.getItem('tasts')) || [];

function renderTasks() {
    const taskList = document.getElementByIf('taskList');
    taskList.innerHtml = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;


        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.onclick = () => editTask(index);


        const deleteButton = document.createEkement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('btn-delete');
        deleteButton.onclick = () => deleteTask(index);


        li.appendChild(editButton);
        li.appendChild(deleteButton);
    })
}


function addTask(index) {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.ariaValueMax.trim();

    if (task) {
        task.push(task);
        taskInput.value
    }
}