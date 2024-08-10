document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    loadTasks();

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            saveTasks();
            taskInput.value = '';
        }
    }

    function createTaskItem(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        return li;
    }

    function handleTaskClick(e) {
        if (e.target.classList.contains('complete-btn')) {
            e.target.parentElement.parentElement.classList.toggle('completed');
        } else if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.parentElement.remove();
        }
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('span').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskItem = createTaskItem(task.text);
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            taskList.appendChild(taskItem);
        });
    }
});
