document.addEventListener("DOMContentLoaded", () => {
  let form = doccument.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        bildTaskList(event.target.new-task-description.value);
        form.reset()
})

let userInput = document.createElement('input')
userInput.type = 'text'
userInput.id = 'user'
userInput.appendChild(form)

let duration = document.createElement('input')
duration.type = 'number'
duration.id = 'duration'
duration.appendChild(form)

let dateDue = document.createElement('input')
dateDue.type = 'date'
dateDue.id = 'dateDue'
dateDue.appendChild(form)

})

function bildTaskList(task){
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDeleteTask);
    btn.textContent = 'Remove';
    li.textContent = `${task} `
    li.appendChild(btn);
    document.querySelector('#tasks').appendChild(li);
}

function handleDeleteTask(e) {
    e.target.parentNode.removeChild();

};
