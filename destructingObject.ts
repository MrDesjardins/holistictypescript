const objToDesctruct1 = {
    destr1: 1,
    destr2: "2",
    destr3: true
}
let { destr1, destr2 } = objToDesctruct1;
objToDesctruct1.destr1 *= 100;
({ destr1, destr2 } = objToDesctruct1); // Notice parentheses