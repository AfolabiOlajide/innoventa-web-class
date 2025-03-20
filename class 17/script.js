console.log(4 ** 2); // 4 to the power of 2

let a = 12;
let b = 3;

console.log(a % b); // remainder

let num1 = 10;
console.log("num(10)++ = ", num1++); // num1 = 11
console.log("++num(10) = ", ++num1); // num1 = 12

// ++ ----> increment
// -- ----> decrement
// ++value increments the value by 1 and returns the new value
// value++ increments the value by 1 and returns the old value

let num2 = 10;
console.log("--num(10) = ", --num2); // 9
console.log("num(10)-- = ", num2--); // 9

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
x -= 5; // x = x - 5
x *= 5; // x = x * 5
x /= 5; // x = x / 5

// Comparison Operators
let aa = 10;
let bb = 10;
// == ---> deals with only value comparison
// === ---> deals with value and type comparison
console.log("aa === bb: ", aa === bb); // true
// ! ----> not
console.log(aa != bb); // false
console.log(aa > bb); // false
console.log(aa < bb); // false
console.log(aa >= bb); // true
console.log(aa <= bb); // true

// && ----> and
// || ----> or

let text1 = "A";
let text2 = "B";

console.log("Unicode value of A: ", text1.charCodeAt(0));
console.log("Unicode value of B: ", text2.charCodeAt(0));
console.log("", String.fromCharCode(170));

let value1 = 10;
let value2 = 20;
// value1 > 12 && value2 < 4
//  false      &&    false
console.log(value1 > 12 && value2 < 4);

// value1 > 12 && value2 < 4 && value > 10 || value < 20
// =========>>>> Left to right evaluation

// Not
let value3 = true;
console.log("!value3: ", !value3);
let value4 = false;
console.log("!value4: ", !value4);
