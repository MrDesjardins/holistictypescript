const inc = 1;
function myNamedFunction(p: number): number { return p + inc; }
const myAnonymousFunc = function (p: number): number { return p + inc; }
const myAnonymousFunc2 = (p: number): number => { return p + inc; }
const myAnonymousFunc3 = (p: number): number => p + inc;
const myAnonymousFunc4 = (p: number) => p + inc;

// Fat arrow
const fatarrow = (p: number): number => { return number * 100; }