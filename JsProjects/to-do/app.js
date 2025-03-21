// Initialize the tasks from localStorage or an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render the tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Create Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.onclick = () => editTask(index);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

//Edit a task
function editTask(index) {
    const taskTask = prompt('Edit your task', tasks[index]);
    const newTask = taskTask.trim();
    if (newTask !== null && newTask.trim() !== '') {

        tasks[index] = newTask;
        saveTasks();
        renderTasks();
    }
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}


// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks on page load
document.addEventListener('DOMContentLoaded', renderTasks);