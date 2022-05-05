const container = document.querySelector('.container');
const btnNewTask = document.querySelector('#push');
const tasks = document.querySelector('.tasks');
const msgEmpty = document.querySelector('.tasks p');

btnNewTask.addEventListener('click', addTask);


// Crea el HTML de la tarea y lo agrega al panel de tareas pendientes
function addTask(s) {

    const taskName = document.querySelector('.newtask input').value
    if (taskName.length === 0) {
        alert('Agrega una tarea');
    } else {
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML = `
            <input type="checkbox"></input>
            <span>
                ${taskName}
            </span>
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        tasks.appendChild(newTask);
        msgEmpty.style.display = 'none';
        document.querySelector('.newtask input').value = ''
        checkBoxActive();
        btnDeleteActive();
    }
}


// Activa el listener del checkbox para marcar completadas las tareas
function checkBoxActive() {
    let currentTask = document.querySelectorAll('.task input');
    for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].addEventListener('click', completeTask);
    }
}

 // Activa el botón borrar en las nuevas tareas
 function btnDeleteActive() {
    let delTask = document.querySelectorAll('.delete');
    for (let i = 0; i < delTask.length; i++) {
        delTask[i].addEventListener('click', deleteTask);
    }
    function deleteTask() {
        this.parentNode.remove();
        msg();
    }
}

// Cuando se selecciona el checbox se dispara este código para completar la tarea y mandarla al contenedor de tareas completas
function completeTask() {
    const doneTaskContainer = document.querySelector('#done-container');
    const newDoneTask = document.createElement('div');
    newDoneTask.classList.add('task');
    newDoneTask.innerHTML = this.parentNode.innerHTML;
    newDoneTask.classList.toggle('completed');
    doneTaskContainer.appendChild(newDoneTask);
    this.parentNode.remove();
    msg();
    btnDeleteActive()
}


// Despliega un mensaje cuando ya no hay tareas pendientes
function msg() {
    if (document.querySelectorAll('#current .delete').length === 0) {
        msgEmpty.innerText = '¡Hurra! Ya no tienes tareas pendientes';
        msgEmpty.style.color = 'green';
        msgEmpty.style.display = 'block';
    }
}

















