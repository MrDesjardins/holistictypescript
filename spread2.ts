const objToClone = { prop1: 1, prop2: "2" };
const clonedObject = { ...objToClone };
const clonedObjectWithMore = { ...objToClone, prop3: "3", prop4: false };
const clonedObjectWithMore2 = { ...objToClone, prop2: "Override" };
console.log(clonedObjectWithMore2);
// { prop1: 1, prop2: 'Override' }

const objToCloneWithFunction = {
    prop1: 1,
    prop2: "2",
    funct1: function () { console.log("Prop1:", this.prop1); }
};
const clonedObjectWithoutFunc = { ...objToCloneWithFunction };
console.log(clonedObjectWithoutFunc);
//{ prop1: 1, prop2: '2', funct1: [Function: funct1] }
clonedObjectWithoutFunc.funct1();
// undefined

class ClassToClone {
    public funct1() { console.log("Props1:", this.prop1); }
    constructor(public prop1: number, public prop2: string) { }
}
const classToClone = new ClassToClone(1, "2");
const classCloned = { ...classToClone };
console.log(classCloned);
//{ prop1: 1, prop2: '2' }

// Class with function object

class ClassToClone2 {
    public funct2 = () => { console.log("Props1:", this.prop1); }
    constructor(public prop1: number, public prop2: string) { }
}
const classToClone2 = new ClassToClone2(1, "2");
const classCloned2 = { ...classToClone2 };
console.log(classCloned2);
// { prop1: 1, prop2: '2', funct2: [Function] }