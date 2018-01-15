class ClassInterchangeable3 { public m1: string; private p1: number; };
class ClassInterchangeable4 { public m2: string; private p1: number; };

function functionPrivateStructure(p: ClassInterchangeable3) { }
functionPrivateStructure(new ClassInterchangeable3());
// functionPrivateStructure(new ClassInterchangeable4()); // Doesn't compile