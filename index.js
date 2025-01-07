// Создаём константы для привязки к необходимым объектам на странице
const INPUT = document.getElementById("task-input");    // поле ввода
const ADD_BUTTON = document.getElementById("add");      // кнопка добавления задачи
const CLEAR_BUTTON = document.getElementById("clear");  // кнопка очистка списка задач
const LIST = document.getElementById("list");           // список

// Функция очистки списка
const clear = () => {
  LIST.innerHTML = "";
}

// Функция добавления задачи
const addTask = () => {
  const inputValue = INPUT.value.trim(); // создаём переменную, в которой храним значение из поля ввода
  if (inputValue) {
      let newItem = document.createElement('li');
      // Второй вариант логики удаления элемента
      // let itemID = Date.now();
      // newItem.id = itemID;
      let itemContainer = document.createElement('div');
      itemContainer.className = "item";
      let textTask = document.createElement('p');
      textTask.textContent = inputValue;
      let deleteButton = document.createElement('button');
      deleteButton.className = "delete";
      deleteButton.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
      deleteButton.addEventListener("click", () => {
        newItem.remove();
        // Второй вариант логики удаления элемента
        // let itemToDelete = document.getElementById(itemID);
        // itemToDelete.remove();
      });
      itemContainer.append(textTask);
      itemContainer.append(deleteButton);
      newItem.append(itemContainer);
      LIST.append(newItem);
  } else {
      alert('Введите задачу!');
  }
};

// Подключаем к кнопкам прослушивание событий с привязкой к функциям
CLEAR_BUTTON.addEventListener("click", clear);
ADD_BUTTON.addEventListener("click", addTask);