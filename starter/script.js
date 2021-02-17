'use strict';

const multiply = function (num1, num2) {
    return num1 * num2;
}

const plus = function (num1, num2) {
    return num1 + num2;
}

const minus = function (num1, num2) {
    return num1 - num2;
}

const divide = function (num1, num2) {
    if (num2 != 0) return num1 / num2;
    else console.log('ERR');
}

//function receiving a function as parameter
const calculate = function (num1, num2, fn) {
    return fn(num1, num2);
}

console.log(calculate(1, 2, multiply));
console.log(calculate(1, 2, plus));
console.log(calculate(1, 2, minus));
console.log(calculate(1, 2, divide));

//function returning a function
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting}, ${name}`);
    }
}

//teacher's version
// const greet = greeting => name => {
//     console.log(`${greeting}, ${name}`);
// }

greet('Hi')('Sam');
greet('Hello')('Emma');