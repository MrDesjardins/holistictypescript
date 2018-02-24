class ClassToUseWithTypeOf { private x: string; public y: string; }

interface InterfaceTypeOf { y: string; }

const classTypeOf = new ClassToUseWithTypeOf();
const interTypeOf: InterfaceTypeOf = { y: "test" };
console.log("Class TypeOf", typeof (classTypeOf)); // object
console.log("Interface TypeOf", typeof (interTypeOf)); // object