"use strict";
// Type Aliases
// Literal types
let myName2;
// myName2 = "Sunil" // this will result in error, because it will accept only one string that is Dave
let userName;
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction{
// (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters. Note optional parameters should be at the end, as shown in below function, c is optional
const addAll = (a, b, c) => {
    if (typeof (c) !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// setting default param values
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof (value) == "string") {
        return "string";
    }
    // if (typeof (value) == 'number') {
    //     return "number"
    // }
    if (isNumber(value)) {
        return "number";
    }
    return createError("This Should never happen!");
};
console.log(numberOrString(20));
console.log(numberOrString("Test"));
