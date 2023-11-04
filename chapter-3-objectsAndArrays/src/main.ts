let stringArr: string[] = ['one', 'hey', 'Dave'];

let guitars: (string | number)[] = ["Strat", "Les Paul", 5150];

let mixedData: (string | number | boolean)[] = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push('hey');

guitars[0] = 1984
guitars.unshift("Jim");

console.log(guitars);

// stringArr = guitars // this would throw error, because stingArr accepts only strings inside the array

guitars = stringArr // this could bee possible, because guitars accepts both string and number

let test: any[] = [];

// order of an array
let myTuple: [string, number, boolean] = ["Dave", 42, true]; // this allow only 3 elements in array and the order of types.

let myObj: object;
myObj = [];
console.log(typeof (myObj));
myObj = {};
console.log(myObj)

const exampleObj = {
    prop1: "Dave",
    prop2: true
}

exampleObj.prop2 = false

interface Guitarist {
    name?: string, // since I addd ?. that means it is either String or undefined. So this parameter will become optional
    active: boolean, 
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
}

let jp: Guitarist = {
    // name: "Jimmy",
    active: true, 
    albums: ["I", "II", "IV"]
}

console.log(evh);

evh = jp;

console.log(evh);

const greetGuitarist = (guitarist: Guitarist) => {
return `Hello ${guitarist?.name}! & ${guitarist.albums} & ${guitarist.active}`
}

console.log(greetGuitarist(jp));

// Enums

enum Grade {
    U,
    D,
    C = 3,
    B,
    A
}

console.log(Grade.U)
let myGrade: Grade = Grade.B;
console.log(myGrade);