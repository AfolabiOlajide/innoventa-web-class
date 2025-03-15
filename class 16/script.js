// String
let myName = "Olajide";
let myCountry = "Nigeria";
let gender = "male";
let age = `20`;

console.log("name: ", myName);
console.log("age: ", age);

// Number
let myAge = 20;
let myHeight = 5.9;
let myWeight = 60;

// Boolean - true or false
let hasEaten = true;
let hasSlept = false;

// Objects - key(variable) value(can be of any data type) pairs {}
let person = {
    firstName: "Olajide",
    age: 23,
    country: "Nigeria",
    hasEaten: true,
};

console.log("person: ", person);
console.log("person firstName: ", person.firstName); // dot notation

// Array (can be of any data type)
let cars = ["Toyota", "Jeep", "Lamborghini", "Tesla"];
let someList = ["list 1", 2000, true, { name: "jide", age: 20 }];

// Date
let myDate = new Date();
console.log("Date: ", myDate);

// example of adding data types
let x = "Volvo" + "16";
console.log(x); // 16Volvo

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Dynamic Javasript types
let myVar = "My Var";
/*
........
*/
myVar = 20;

let text = "Some text and name: 'Jide'";
console.log(text);

// exponential notation
let raiseToFifteeen = 1e15;
console.log(raiseToFifteeen);

// Equal to
let a = 5;
let b = 7;
console.log(a == b);

/*
    Boolean values
    true - 1 or any non-zero value
    false - 0
*/

let garageCars = ["Toyota", "Jeep", "Lamborghini"];
console.log(garageCars);
garageCars[0] = "Tesla";
console.log(garageCars);

console.log(typeof a);
console.log(typeof text);
console.log(typeof garageCars);
console.log(typeof person);

let myNewVariable;
console.log(myNewVariable);

// emptying a variable
raiseToFifteeen = undefined;

garageCars = undefined;
console.log(garageCars);

// empty string
let emptyString = "";
console.log(emptyString);
console.log(typeof emptyString);
