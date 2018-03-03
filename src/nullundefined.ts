let aNumber: number = 2; // undefined
aNumber = undefined;  // "strictNullChecks": true => won't compile
function compareWithInstanceOf(
    p1: null | undefined | number, 
    p2: undefined | number, 
    p3?: number
) {
}