/// Variables

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoClearAllBtn = document.querySelector(".todo-button-clear");
let allTodoItemsBtn = document.querySelectorAll(".todo-item-button-clear");
const todoList = document.querySelector(".todo-list");
let todoListArray = [];

// console.log(allTodoItemsBtn); // node list

////-------------------------------------------------
//// Event Listeners

document.addEventListener("DOMContentLoaded", function () {
    const database = JSON.parse(localStorage.getItem("todoListArray"));
    if (database) {
        for (let i = 0; i < database.length; i++) {
            const li = document.createElement("li");
            li.textContent = database[i];
            li.classList.add("todo-list-item");
            const deleteButton = createDeleteButton();
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        }
        updateTodoItems();
    }
});

// function to add a new todo
todoButton.addEventListener("click", function () {
    if (todoInput.value === "" || todoInput.value.length < 3) {
        return;
    }
    // adding each value too an array
    todoListArray.push(todoInput.value);
    // creating an li element
    const li = document.createElement("li");
    // adding the value to the li
    li.innerText = todoInput.value;
    li.classList.add("todo-list-item");
    const deleteButton = createDeleteButton();
    li.appendChild(deleteButton);
    // appending the li to the ol
    todoList.appendChild(li);
    todoInput.value = "";
    // save todo list to local storage
    console.log("todolistarray", todoListArray);
    saveTodoList();
    updateTodoItems();
});

todoClearAllBtn.addEventListener("click", clearAllTodos);

///----------------------------------------
// functions

function saveTodoList() {
    // get todo list from local storage
    const database = JSON.parse(localStorage.getItem("todoListArray"));
    // if todo list is not empty
    if (database) {
        console.log("local todo list", database);
        // concatenate the local todo list with the new todo list
        // [item1]
        const newTodoList = database.concat(
            todoListArray.splice(0, todoListArray.length)
        );
        localStorage.setItem("todoListArray", JSON.stringify(newTodoList));
        // set todo list to an empty array
        todoListArray = [];
        return;
    }

    // if todo list is empty
    localStorage.setItem("todoListArray", JSON.stringify(todoListArray));
    todoListArray = [];
    // JSON.stringify() converts a JavaScript object or value to a JSON string
    // Javascript Object Notation
}

function clearAllTodos() {
    localStorage.removeItem("todoListArray");
    todoList.innerHTML = "";
    todoListArray = [];
}

function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
        "btn-icon",
        "todo-button-clear",
        "todo-item-button-clear"
    );
    const spanButtonIcon = document.createElement("span");
    spanButtonIcon.classList.add("material-symbols-outlined");
    spanButtonIcon.textContent = "delete";
    deleteButton.appendChild(spanButtonIcon);

    return deleteButton;
}

function deleteTodoItem(item) {
    console.log(item);
}

function updateTodoItems() {
    allTodoItemsBtn = document.querySelectorAll(".todo-item-button-clear");
    // for each selects all the buuttons in the array and loops through them
    allTodoItemsBtn.forEach((btn, i) => {
        btn.addEventListener("click", function (event) {
            btn.parentElement.remove();
            deleteItemFromDatabase(i);
        });
    });
}

function deleteItemFromDatabase(index) {
    // get todo list from local storage
    const database = JSON.parse(localStorage.getItem("todoListArray"));
    // if todo list is not empty
    if (database) {
        let newList = database;
        newList.splice(index, 1);
        localStorage.setItem("todoListArray", JSON.stringify(newList));
        // set todo list to an empty array
        todoListArray = [];
        return;
    }

    updateTodoItems();
}

// function showTodoList() {
//     for (let i = 0; i < todoListArray.length; i++) {
//         const li = document.createElement("li");
//         li.textContent = todoListArray[i];
//         todoList.appendChild(li);
//     }
// }

// showTodoList();
