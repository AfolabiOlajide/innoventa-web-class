const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoClearAllBtn = document.querySelector(".todo-button-clear");
const todoList = document.querySelector(".todo-list");

let todoListArray = [];

document.addEventListener("DOMContentLoaded", function () {
    const localTodoList = JSON.parse(localStorage.getItem("todoListArray"));
    if (localTodoList) {
        todoListArray = localTodoList;
        for (let i = 0; i < todoListArray.length; i++) {
            const li = document.createElement("li");
            li.textContent = todoListArray[i];
            todoList.appendChild(li);
        }
    }
});

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
    console.log("inner text", li.innerText);
    // appending the li to the ol
    todoList.appendChild(li);
    todoInput.value = "";
    // save todo list to local storage
    console.log("todolistarray", todoListArray);
    saveTodoList();
});

todoClearAllBtn.addEventListener("click", clearAllTodos);

function saveTodoList() {
    // get todo list from local storage
    const localTodoList = JSON.parse(localStorage.getItem("todoListArray"));
    // if todo list is not empty
    if (localTodoList) {
        console.log("local todo list", localTodoList);
        // concatenate the local todo list with the new todo list
        // [item1]
        const newTodoList = localTodoList.concat(
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

// function showTodoList() {
//     for (let i = 0; i < todoListArray.length; i++) {
//         const li = document.createElement("li");
//         li.textContent = todoListArray[i];
//         todoList.appendChild(li);
//     }
// }

// showTodoList();
