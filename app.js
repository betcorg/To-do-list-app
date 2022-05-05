
const btnNewTask = document.querySelector('#push');
const tasks = document.querySelector('.tasks');
const msgEmpty = document.querySelector('.tasks p')

btnNewTask.addEventListener('click', addTask);


// Crea el HTML de la tarea y lo agrega al panel de tareas pendientes
function addTask() {
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
        document.querySelector('.newtask input').value = '';

        // Agrega event listener al boton borrar de las nuevas tareas.
        let delTask = document.querySelectorAll('.delete');
        for (let i = 0; i < delTask.length; i++) {
            delTask[i].addEventListener('click', deleteTask);
        }

        // Marca como comletadas las tareas selecionadas
        let currenttask = document.querySelectorAll('.task input');
        for (let i = 0; i < currenttask.length; i++) {
            currenttask[i].addEventListener('click', completeTask);
        }
    }
}

function deleteTask() {
    this.parentNode.remove();
    if (document.querySelectorAll('.delete').length === 0) {
        msgEmpty.style.display = 'block';
        msgEmpty.style.color = 'green';
        msgEmpty.innerText = '¡Hurra! Ya no tienes tareas pendientes';
    }
}

function completeTask() {
    this.parentNode.classList.toggle('completed');
}













