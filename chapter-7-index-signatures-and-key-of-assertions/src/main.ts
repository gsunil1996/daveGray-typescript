// Index Signatures

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

///////////////////////////////////////////////////////////////////////////////////

// interface TransactionObj {
//    [index: string] : number
// }

///////////////////////////////////////////////////////////////////////////////////

interface TransactionObj {
  readonly [index: string]: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza']);

let prop: string = "Pizza";
 console.log("dynamic",todaysTransactions[prop])

const todaysNet = (obj: TransactionObj): number => {
  let total = 0;
  for (const key in obj) {
    total += obj[key];
  }
  return total;
};

console.log("Transactions", todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40 // Index signature in type 'TransactionObj' only permits reading.

///////////////////////////////////////////////////////////////////////////////////

interface TransactionObj1 {
  readonly [index: string]: number | string;
  Pizza: -10;
  Books: -5;
  Job: 50;
}

const todaysTransactions1: TransactionObj1 = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 42, // this will be optional
  Sunil: "Kumar",
};

///////////////////////////////////////////////////////////////////////////////////

interface Student {
  [key: string]: string | number | number[] | undefined,
  name: string,
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

console.log("checkUndefined",student.test); // undefined

for (const key in student) {
    console.log("checkStudent",`${key}: ${student[key]}`)
}

///////////////////////////////////////////////////////////////////////////////////

interface Student1 {
//  [key: string]: string | number | number[] | undefined,
  name: string,
  GPA: number,
 classes?: number[],
}

const student1: Student1 = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};


for (const key in student1) {
    console.log("s1", `${key}: ${student1[key as keyof Student1]}`)
}

Object.keys(student1).map(key => {
    console.log("s2", student1[key as keyof typeof student1])
})

const logStudentKey = (student: Student1, key: keyof Student1): void => {
    console.log("s3", `Student ${key}: ${student[key]}`)
}

logStudentKey(student1, "name");

///////////////////////////////////////////////////////////////////////////////////

// interface Incomes {
//     [key: string | number]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: "hardWork"
}

for (const revenue in monthlyIncomes) {
    console.log("Incomes", monthlyIncomes[revenue as keyof Incomes])
}