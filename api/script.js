const btn = document.getElementById("btn");
btn.addEventListener("click", getToDo);

async function getToDo() {
    // fetch("https://jsonplaceholder.typicode.com/todos/")
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let transformedData = await response.json();
    for (let i = 0; i < transformedData.length; i++) {
        console.log(transformedData[i]);
    }
}
