let myName: string;
myName = "Sunil";

console.log(myName);

let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let differentTypes: string | number;

myName = "John";
meaningOfLife = 42;
isLoading = true;

album = "Van Halen";
album = 1984;
album = true;

differentTypes = "Sunil";
differentTypes = 1995;

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

console.log(typeof undefined, typeof null); // undefined object
