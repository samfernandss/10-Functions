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

// this keyword in event listener
const lufthansa = {
    airline: 'Lufthansa',
    iatacode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
        this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
    }
}

const eurowings = {
    airline: 'Eurowings',
    iatacode: 'EW',
    bookings: []
}

const book = lufthansa.book;
book.call(lufthansa, 25, 'Felipe');
book.call(eurowings, 15, 'Emma');

lufthansa.book(456, 'Sam');
console.log(lufthansa);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    //console.log(this);
    this.planes++;

    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => {
    return value + value * rate;
}

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

// using return function
const addTaxVAT = function (rate) {
    return function (value) {
        console.log(value + value * rate);
    }
}

const addVAT2 = addTaxVAT(0.23);
addVAT2(100);