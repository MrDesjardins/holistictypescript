class C1 {}
class C2 {}
const c1 = new C1();
if (c1 instanceof C1) {
    console.log("c1 is an instance of C1");
}
if (c1 instanceof C2) {
    console.log("c1 is an instance of C1");
}