let aNumber: number = 2; // undefined
aNumber = undefined;  // "strictNullChecks": true => won't compile
function f1(
    p1: null | undefined | number, 
    p2: undefined | number, 
    p3?: number
) {
}