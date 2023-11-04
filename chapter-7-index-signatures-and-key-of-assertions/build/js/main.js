"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza']);
let prop = "Pizza";
console.log("dynamic", todaysTransactions[prop]);
const todaysNet = (obj) => {
    let total = 0;
    for (const key in obj) {
        total += obj[key];
    }
    return total;
};
console.log("Transactions", todaysNet(todaysTransactions));
const todaysTransactions1 = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42,
    Sunil: "Kumar",
};
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
console.log("checkUndefined", student.test); // undefined
for (const key in student) {
    console.log("checkStudent", `${key}: ${student[key]}`);
}
const student1 = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
for (const key in student1) {
    console.log("s1", `${key}: ${student1[key]}`);
}
Object.keys(student1).map(key => {
    console.log("s2", student1[key]);
});
const logStudentKey = (student, key) => {
    console.log("s3", `Student ${key}: ${student[key]}`);
};
logStudentKey(student1, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: "hardWork"
};
for (const revenue in monthlyIncomes) {
    console.log("Incomes", monthlyIncomes[revenue]);
}
