type One = string;
type Two = string | number;
type Three = 'hello'

// convert to more or less specific
let a: One = "hello"
let b = a as Two; // less specific, now this is "hello" as a is there, but we assigned as Two, so that b can be either String or Number
console.log(b)
b = 2;
console.log(b)

let c = a as Three // more specific, this is only string "hello", it do not accept anything
console.log(c);

let d = <One>'world'; // this is same as "a"
console.log(d)

let e = <string | number>'Hello World'
console.log(e)

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return a + b;
    return "" + a + b
}

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;


// The DOM
const img = document.querySelector('img')! // ! means non null assertion
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLIFrameElement>document.getElementById('#img')