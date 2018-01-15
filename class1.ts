// Empty class
class ClassEmpty { }
function functionEmptyClass(c: ClassEmpty) { }
functionEmptyClass({ m1: "" });

// Interchangeable if structure the same
class ClassInterchangeable1 { m1: string };
class ClassInterchangeable2 { m1: string; m2: string };
function functionInterchangeable(c: ClassInterchangeable1) { }
functionInterchangeable(new ClassInterchangeable2());