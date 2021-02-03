const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task') //na biezaca aktualizuje liste 
const input = document.querySelector('input');


const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    const task = document.createElement('li');
    if (titleTask === "") return;
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Usuń</button>";
    toDoList.push(task);
    ul.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    })
    ul.appendChild(task);
    input.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', deleteLi);


}
const deleteLi = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = listItems.length;
    input.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', deleteLi);
}

form.addEventListener('submit', addTask);