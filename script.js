const addTaskButton = document.querySelector('.add-task');
const taskWindow = document.querySelector('.wrapper');
const submitTask = document.querySelector('submit-task');

addTaskButton.addEventListener('click', () => {
    taskWindow.style.display = 'flex';
    taskWindow.style.transition = '.4s'
});


// document.body.style.background = 'red';
// setTimeout(() => {
//     document.body.style.background = '';
//     document.body.style.transition = '0.8s';    
// }, 2000);