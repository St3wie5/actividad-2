// Selección de elementos del DOM
const taskInput = document.getElementById('nueva-tarea'); // Cambiado a 'nueva-tarea'
const addTaskBtn = document.getElementById('agregar-tarea'); // Cambiado a 'agregar-tarea'
const taskList = document.getElementById('taskList'); // Este ID ya es correcto

// Función para agregar una tarea
const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Crear un elemento <li> para la tarea
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${taskText}</span>
        <div>
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        </div>
    `;

    // Agregar eventos a los botones de la tarea
    li.querySelector('.edit-btn').addEventListener('click', () => editTask(li));
    li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(li));
    li.querySelector('.task-checkbox').addEventListener('change', () => toggleTaskCompleted(li));

    // Agregar la tarea a la lista
    taskList.appendChild(li);

    // Limpiar el campo de entrada
    taskInput.value = "";
};

// Función para marcar o desmarcar una tarea como completada
const toggleTaskCompleted = (taskItem) => {
    const taskSpan = taskItem.querySelector('span');
    const checkbox = taskItem.querySelector('.task-checkbox');

    if (checkbox.checked) {
        taskSpan.style.textDecoration = 'line-through';
    } else {
        taskSpan.style.textDecoration = 'none';
    }
};

// Función para editar una tarea
const editTask = (taskItem) => {
    const taskSpan = taskItem.querySelector('span');
    const newTaskText = prompt("Edita tu tarea:", taskSpan.textContent);

    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskSpan.textContent = newTaskText.trim();
    }
};

// Función para eliminar una tarea
const deleteTask = (taskItem) => {
    taskItem.remove();
};

// Evento para el botón "Agregar Tarea"
addTaskBtn.addEventListener('click', addTask);
