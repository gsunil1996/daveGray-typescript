"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift("Jim");
console.log(guitars);
// stringArr = guitars // this would throw error, because stingArr accepts only strings inside the array
guitars = stringArr; // this could bee possible, because guitars accepts both string and number
let test = [];
// order of an array
let myTuple = ["Dave", 42, true]; // this allow only 3 elements in array and the order of types.
let myObj;
myObj = [];
console.log(typeof (myObj));
myObj = {};
console.log(myObj);
const exampleObj = {
    prop1: "Dave",
    prop2: true
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"]
};
let jp = {
    // name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
console.log(evh);
evh = jp;
console.log(evh);
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist === null || guitarist === void 0 ? void 0 : guitarist.name}! & ${guitarist.albums} & ${guitarist.active}`;
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
let myGrade = Grade.B;
console.log(myGrade);
