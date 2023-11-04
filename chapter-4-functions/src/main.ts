// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberAray = (string | number)[];

type Guitarist2 = {
    name?: string,
    active: boolean, 
    // albums: (string | number)[]
    albums: stringOrNumberAray
}

type UserId = stringOrNumber;

// Literal types
let myName2: "Dave"

// myName2 = "Sunil" // this will result in error, because it will accept only one string that is Dave

let userName: "Dave" | "John" | "Amy";

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number{
    return c-d
}

type mathFunction = (a: number, b: number) => number

// interface mathFunction{
// (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c* d
}

logMsg(multiply(2, 2));


// optional parameters. Note optional parameters should be at the end, as shown in below function, c is optional
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof(c) !== "undefined") {
        return a + b + c
    }
    return a + b;
}

// setting default param values
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++
        if(i > 100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false
}

const numberOrString = (value: number | string): string => {
    if (typeof (value) == "string") {
        return "string"
    }
    // if (typeof (value) == 'number') {
    //     return "number"
    // }
    if (isNumber(value)) {
        return "number"
    }
    return createError("This Should never happen!")
}

console.log(numberOrString(20))
console.log(numberOrString("Test"))