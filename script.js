const addTaskButton = document.querySelector('.add-task');
const taskWindow = document.querySelector('.wrapper');
const submitTask = document.querySelector('.submit-task');
const taskInput = document.querySelector('.task-input');
const createTaskWindow = document.querySelector('.window-task')

addTaskButton.addEventListener('click', () => {
    taskWindow.style.display = 'flex';
    taskWindow.style.transition = '.4s';
    submitTask.addEventListener('click', () => {
        taskWindow.style.display = 'none';
    });
});

submitTask.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('h1');
        newTask.textContent = taskText;
        taskWindow.appendChild(newTask);
        taskInput.value = '';
        createTaskWindow.style.display = 'none';
        createTaskWindow.style.zIndex = -10;
    }
})

// document.body.style.background = 'red';
// setTimeout(() => {
//     document.body.style.background = '';
//     document.body.style.transition = '0.8s';    
// }, 2000);