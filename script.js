const addTaskButton = document.querySelector('.add-task');
const taskList = document.querySelector('.doing-window');
const taskWindow = document.querySelector('.wrapper');
const submitTask = document.querySelector('.submit-task');
const taskInput = document.querySelector('.task-input');
const createTaskWindow = document.querySelector('.window-task')
const closeWindowTask = document.querySelector('.close-window-task');


submitTask.addEventListener('click', addTask);

closeWindowTask.addEventListener('click', ()=> {
    taskWindow.classList.add('hide-task-window');
})

addTaskButton.addEventListener('click', () => {
    taskWindow.style.display = 'flex';
    taskWindow.style.transition = '.4s';
    submitTask.addEventListener('click', () => {
        taskWindow.style.display = 'none';
    });
});

// Функция для добавления задачи в список
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('h1');
        newTask.classList.add('one-task');
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = '';
        taskWindow.style.display = 'none';
        saveTasks(); // Сохраняем задачи в Local Storage после добавления новой задачи
    }
}

// Функция для сохранения задач в Local Storage
function saveTasks() {
    localStorage.setItem('tasks', taskList.innerHTML);
}

// Функция для загрузки задач из Local Storage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}

// Загружаем задачи при загрузке страницы
loadTasks();