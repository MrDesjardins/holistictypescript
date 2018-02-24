
// Two ways to cast
const cast1: number = <number>1;
const cast2: number = 1 as number;


// Danger of casting:

interface ICast1 { m1: string }
interface ICast2 { m1: string, m2: string }

let icast1: ICast1 = { m1: "m1" };
let icast2: ICast2 = { m1: "m1", m2: "m2" };
let icast3: ICast1 = icast2; // work without cast because of the structure
// icast2 = icast1; // doesn't work, miss a member
let icast4: ICast2 = icast1 as ICast2; // work but m2 undefined
// console.log(icast4); // { m1: 'm1' } // m2 is missing even if not optional

// Danger 2

interface ITypeA { m1: string }
interface ITypeB extends ITypeA { m2: string }
interface ITypeC extends ITypeB { m3: string }
const typea: ITypeA = { m1: "m1" };
const typeb: ITypeB = { m1: "m1", m2: "m2" };
let typeb2: ITypeB = typea as ITypeB; // Work (m2 will be missing!!!)
let typea2: ITypeA = typeb; // No cast needed
console.log(typea2); // { m1: 'm1', m2: 'm2' } However, only m1 is accessible at compilation

// Cast with any
let aNumberToCast: number = 1;
// let aString: string = aNumberToCast as string; // Doesn't work
let aString: string = aNumberToCast as any as string; 