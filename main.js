document.getElementById('add-task-btn').addEventListener('click', addTask);

document.getElementById('new-task-input').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task-input');
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        const taskEl = document.createElement('li');
        taskEl.classList.add('task');
        taskEl.innerHTML = `
            ${taskText}
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(taskEl);
        newTaskInput.value = '';
    }
}

function completeTask(button) {
    const task = button.parentElement;
    task.style.textDecoration = "line-through";
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}
