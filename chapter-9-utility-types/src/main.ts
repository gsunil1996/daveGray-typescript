// utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })
assignGraded.grade = 50;
console.log(assignGraded)

// Required and ReadOnly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database etc
    return assign
}

// by doing this Required, the verified also became required instead of optional
const testRecordAssignment = recordAssignment({ ...assignGraded, verified: true })
// by doing this, we can able to make verified as true and code will work
console.log(testRecordAssignment)
testRecordAssignment.grade = 60;
console.log(testRecordAssignment)

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }
// assignVerified.grade = 60 // error : Cannot assign to 'grade' because it is a read-only property.
console.log(assignVerified)

// Record 
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
}


// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

// this will only pick "studentId" and "grade" from Assignment Interface
const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

// this will take all properties from Assignment Interface except "grade" and "verified"
const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
}

// Exclude and Extract 

type adjustedGrade = Exclude<LetterGrades, "U"> // type adjustedGrade = "A" | "B" | "C" | "D"

type highGrades = Extract<LetterGrades, "A" | "B"> // type highGrades = "A" | "B"

// Nonnullable 

type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades> // type NamesOnly = "Dave" | "John"

// ReturnType 

// type newAssign = {
//     title: string,
//     points: number
// }

// const createNewAssign = (title: string, points: number): newAssign => {
//     return { title, points }
// }

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>
// If we do any changes in createNewAssign, then it always changes return type NewAssign

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)


// Awaited - helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}


type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))

// keyOf -> it points to type, eg: type, interface
// typeOf -> function output type (store)