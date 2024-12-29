// Получаем элементы страницы
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Событие добавления задачи
taskForm.addEventListener("submit", (e) => {e.preventDefault(); // Предотвращаем перезагрузку страницы

// Получаем значение из полей  
const taskTitle = document.getElementById("taskTitle").value;
const taskDeadline = document.getElementById("taskDeadline").value;

// Создаем задачу
const taskItem = document.createElement("li"); 

// Создаем новый элемент списка
taskItem.innerHTML = `<span>${taskTitle} (Due: ${taskDeadline})</span>
<button class="complete-btn">Complete</button> 
<button class="delete-btn">Delete</button>`;

// Добавляем задачу в список
taskList.appendChild(taskItem);

// Очищаем форму
taskForm.reset();
});

// Обработка кнопок "Complete" и "Delete"
taskList.addEventListener("click", (e) => {
    if
    (e.target.classicList.contains("delete-btn")) {
        e.target.parentElement.remove();

// Удаление задачи
    }
    if
    (e.target.classicList.contains("complete-btn")) {
        e.target.parentElement.style.textDecoration = "line-through";
// Отмечаем задачу выполненной
    }
});