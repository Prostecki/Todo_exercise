const addTaskButton = document.querySelector('.add-task');
const taskList = document.querySelector('.doing-window');

addTaskButton.addEventListener('click', () => {
    const taskWindow = document.createElement('div');
    taskWindow.classList.add('flex-box-container');


    const newTask = document.createElement('div');
    const checkBox = document.createElement('div');

    newTask.classList.add('one-task');
    checkBox.classList.add('checkbox');

    newTask.textContent = 'New task...';

    taskList.appendChild(taskWindow);
    taskWindow.appendChild(newTask);
    taskWindow.appendChild(checkBox);

    console.log('clicked and added!');

});


