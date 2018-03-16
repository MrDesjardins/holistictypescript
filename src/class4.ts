class SuperClass {
    constructor(p1: number) { }
}
class ChildClass extends SuperClass {
    constructor(p2: number, p3: string) {
        super(p2);
    }
}
const childClass = new ChildClass(1, "3");