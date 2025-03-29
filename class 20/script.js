// FUNCTIONS (ARROW FUNCTIONS)

// let name = "Jide";
// let name2 = "Olajide";
// let name3 = "Samuel";

// console.log(name);
// console.log(name2);
// console.log(name3);

// creating a function
// function functionName(parameters) {code block......}
function printName(name) {
    console.log(name);
}
/*
{
    code block
}
*/

// calling the function functionName(arguments)
printName("jide");
printName("olajide");
printName("samuel");

function add(num1, num2) {
    console.log(`${num1} + ${num2} = `, num1 + num2);
    return num1 + num2;
}

add(2, 5);
add(10, 67);
add(5, 0);

let result = add(10, 20);
console.log("result: ", result);

// Global variable
let x = 10;

function printXValue() {
    // Local variable
    let x = 20;
    console.log("value of x is: ", x);
}

printXValue();

// arrow functions
// let functionName = (parameters) => {code block}
let arrowAdd = (num1, num2) => {
    console.log(`ArrowAdd function: ${num1} + ${num2} = `, num1 + num2);
    // other statements
};

arrowAdd(2, 5);
arrowAdd(10, 67);
arrowAdd(5, 0);
