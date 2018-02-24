class C100 extends Error {
    constructor() {
        super();
        Object.setPrototypeOf(this, C100.prototype);
    }
}
class C200 extends C100 {
    constructor() {
        super();
        Object.setPrototypeOf(this, C200.prototype);
    }
}
const c100 = new C200();
if (c100 instanceof C100) {
    console.log("c100 is an instance of C100");
}
if (c100 instanceof C200) {
    console.log("c100 is an instance of C200");
}
if (c100 instanceof Error) {
    console.log("c100 is an instance of Error");
}