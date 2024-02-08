const addTaskButton = document.querySelector('.add-task');
const taskList = document.querySelector('.doing-window');
addTaskButton.addEventListener('click', () => {
    const newTask = document.createElement('h1');
    newTask.textContent = 'New task...'
    taskList.appendChild(newTask);
    console.log('clicked and added!');
})