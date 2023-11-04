"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // less specific, now this is "hello" as a is there, but we assigned as Two, so that b can be either String or Number
console.log(b);
b = 2;
console.log(b);
let c = a; // more specific, this is only string "hello", it do not accept anything
console.log(c);
let d = 'world'; // this is same as "a"
console.log(d);
let e = 'Hello World';
console.log(e);
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// The DOM
const img = document.querySelector('img'); // ! means non null assertion
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
