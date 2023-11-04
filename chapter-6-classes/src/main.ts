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
    secondLang!: string

    constructor(
       public readonly name: string,
       public music: string,
        private age: number,
        protected lang: string = "Typescript",
        
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }

}

// const Dave = new Coder('Dave', 'Rock', 42);
// Dave.music = "roll"
// console.log("checkDave", Dave)
// console.log("Test", Dave.getAge());


class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }
    public getLang() {
        return `I write ${this.lang}`
    }
}

// const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
// console.log(Sara)
// console.log(Sara.getLang())


interface Musician{
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician{
    
    name: string
    instrument: string

    // typescript does not allow to add property which is not in interface and it thow error : Property 'subject' has no initializer and is not definitely assigned in the constructor.

    // subject: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} ${this.instrument}`
    }
    
    // we can add more methods which are not the part of interface and typescript allow it
    add(a: number, b: number): number{
        return a + b;
    }
    
}

const Page = new Guitarist("Jimmy", "guitar");
// console.log(Page.play("strums"));
// console.log(Page.add(1,2))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

class Peeps {

    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

// console.log(John.id)
// console.log(Amy.id)
// console.log(Steve.id)
// console.log(Peeps.count);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }
    
    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof (el) === "string")) {
            this.dataState = value
            return
        } else {
            throw new Error('Param is not an array of strings');
        }
    }
}

const Mybands = new Bands();
Mybands.data = ["Neil Young", "Led Zep"];
console.log(Mybands.data)

Mybands.data = [...Mybands.data, "ZZ Top"];
console.log(Mybands.data)

Mybands.data = ["Sunil"]
console.log(Mybands.data)