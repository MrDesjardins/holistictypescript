// Two ways to define object type with curly brackets
let myObjectTypedWithCurlyType: { x: number, y: string } = { x: 1, y: "2" };

interface MyTypeWithTwoMembers { x: number, y: string }
let myObjectTypedWithCurlyType2: MyTypeWithTwoMembers = { x: 1, y: "2" };

// Problematic type assignation:
let myObjectTypedWithCurlyType3 = { x: 1 } as MyTypeWithTwoMembers;

let objectIndex: { x: number, y: string } = { x: 1, y: "2" };
objectIndex["x"] = 2;
// objectIndex[0] = 1;     // Doesn’t compile with noImplicitAny=true
// objectIndex["asd"] = 1; // Doesn’t compile with noImplicitAny=true
// objectIndex[{ x: 1 }] = 123; // Doesn't compile
//console.log(objectIndex); // { '0': 1, x: 2, y: '2' } //noImplicitAny=false

// Dictionary

interface MyStringDictionary {
    [key: number]: string;
}
const dict1: MyStringDictionary = {
    [100]: "hundred",
    [200]: "two hundreds"
};
interface MyGenericDictionary<T> {
    [id: string]: T;
}
const dict2: MyGenericDictionary<string> = {
    ["100"]: "hundred",
    ["200"]: "two hundreds"
};


// Index Type with members
interface MyStringDictionaryWithMembers {
    [key: string]: string;
    m1: string;
    // m2: number; // Won't compile, must be string
}
interface MyStringDictionaryWithMembers2 {
    [key: number]: string;
    m1: string;
    m2: number;
    m3: boolean;
    m4: { x: string, y: number }
}

interface MyStringDictionaryWithTwoMap {
    [key: number]: string;
    [key: string]: string;
    // [key: string]: number; // Doesn't compile
}


interface MyStringDictionaryWithMembers3 {
    [key: string]: string | number;
    m1: string;
    m2: number; 
}
