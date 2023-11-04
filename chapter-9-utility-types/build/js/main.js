"use strict";
// utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
assignGraded.grade = 50;
console.log(assignGraded);
// Required and ReadOnly
const recordAssignment = (assign) => {
    // send to database etc
    return assign;
};
// by doing this Required, the verified also became required instead of optional
const testRecordAssignment = recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// by doing this, we can able to make verified as true and code will work
console.log(testRecordAssignment);
testRecordAssignment.grade = 60;
console.log(testRecordAssignment);
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 60 // error : Cannot assign to 'grade' because it is a read-only property.
console.log(assignVerified);
// Record 
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
// this will only pick "studentId" and "grade" from Assignment Interface
const score = {
    studentId: "k123",
    grade: 85,
};
// this will take all properties from Assignment Interface except "grade" and "verified"
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// ReturnType 
// type newAssign = {
//     title: string,
//     points: number
// }
// const createNewAssign = (title: string, points: number): newAssign => {
//     return { title, points }
// }
const createNewAssign = (title, points) => {
    return { title, points };
};
// If we do any changes in createNewAssign, then it always changes return type NewAssign
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
// keyOf -> it points to type, eg: type, interface
// typeOf -> function output type (store)
