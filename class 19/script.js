let name = "Jide";
let age = 20;

let displayName = `Hello, my name is ${name}, I am ${age} years old`;
console.log(displayName);
console.log(name.toUpperCase());

let matrix = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    {
        name: "Jide",
        age: 20,
    },
    {
        name: "samuel",
        age: 36,
    },
    "as an element in the array",
    30,
    true,
];

//--------------------------------------------

let shapeHub = {
    name: "shapeHub",
    numberOfShapes: 3,
    circle: function () {
        return "I am a circle";
    },
    triangle: function () {
        return "I am a triangle";
    },
    rectangle: function () {
        return "I am a rectangle";
    },
};

console.log(shapeHub);
console.log(shapeHub.name);
console.log(shapeHub.circle());
console.log(shapeHub.triangle());
console.log(shapeHub.rectangle());

// if statements
let value = "1"; //
/*
if(condition){
    code......(code runs only when condition is true)
}
*/
if (value > 5) {
    console.log("value is greater than 5");
} else if (value > 4) {
    console.log("value is greater than 4");
} else if (value == 5) {
    console.log("value is equal to 5");
} else {
    console.log("value is less than 5");
}
//..........
if (3 > 5) {
    console.log("3 is greater than 5");
}

// for loops
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
//..........
/*
for(initializer; condition; incrementor){
    code......
}
- intializer: executes once before the code runs
- condition: executes as long as the condition is true
- incrementor: executes once after the code runs
*/
for (let num = 1; num <= 10; num++) {
    // console.log(num);
    console.log(`${num}. My name is Olajide`);
    //code.........
}
//..........continues down here when the condition does not hold true
console.log("-----------------------------------------------------");
let x = 0; // initializer
for (;;) {
    if (x > 5) {
        // condition
        break;
    }
    console.log(`${x}. For loop without initializer etc`);
    x++; // incrementor
}

let person = {
    fname: "Olajide",
    lname: "Afolabi",
    age: 20,
};

console.log(person["fname"]);

for (let x in person) {
    console.log(`${x}: ${person[x]}`);
}

// for of loop vs for in loop
// for in loop is best used with objects
// for of loop is best used with arrays and other iterable objects or data structures such as strings etc.
let array = ["BMW", "Volvo", "Mini"];
console.log("-----------------------");
console.log("for in loop");
for (let x in array) {
    console.log(`${x}: ${array[x]}`);
}

console.log("-----------------------");
console.log("for of loop");
for (let x of array) {
    console.log(x);
}

// edited on github
