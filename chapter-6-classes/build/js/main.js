"use strict";
// refer section 14 in javascript udemy 213 to 215
// class Coder {
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(name: string, music: string, age: number, lang: string) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }
// const Dave = new Coder('Dave', 'Rock', 42, "Telugu")
// console.log(Dave)
// above code can also written like this with visibility modifiers
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
// const Dave = new Coder('Dave', 'Rock', 42);
// Dave.music = "roll"
// console.log("checkDave", Dave)
// console.log("Test", Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
class Guitarist {
    // typescript does not allow to add property which is not in interface and it thow error : Property 'subject' has no initializer and is not definitely assigned in the constructor.
    // subject: string
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
    // we can add more methods which are not the part of interface and typescript allow it
    add(a, b) {
        return a + b;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
// console.log(Page.play("strums"));
// console.log(Page.add(1,2))
/////////////////////////////////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
// console.log(John.id)
// console.log(Amy.id)
// console.log(Steve.id)
// console.log(Peeps.count);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof (el) === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const Mybands = new Bands();
Mybands.data = ["Neil Young", "Led Zep"];
console.log(Mybands.data);
Mybands.data = [...Mybands.data, "ZZ Top"];
console.log(Mybands.data);
Mybands.data = ["Sunil"];
console.log(Mybands.data);
