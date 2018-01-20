// Remaining
const objToDesctruct2 = {
    destr1: 1,
    destr2: "2",
    destr3: true
}
let { destr1, ...remainingObjDestr1 } = objToDesctruct2;
/*
let remainingObjDestr1: {
    destr2: string;
    destr3: boolean;
}
*/
// New name
let { destr1: newName } = objToDesctruct2;
console.log("Using new name:", newName);

// Default value
const objToDesctruct3 = {
    destr1: 1,
    destr2: undefined,
    destr3: true
}
let { destr2: newName2 = "default" } = objToDesctruct3;
console.log("Using default value if undefined", newName2);
// Using default value if undefined default