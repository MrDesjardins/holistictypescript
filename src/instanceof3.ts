class BaseClassA {}
class ChildB extends BaseClassA {}
class ChildC extends BaseClassA {}
class ChildD extends BaseClassA { c: string }

function compareWithInstanceOf(x: ChildB | ChildC | ChildD) {
    if (x instanceof ChildB) {
        console.log("Found an instance of B");
        x;  // B (V2.6: B | D)
    }
    else if (x instanceof ChildC) {
        console.log("Found an instance of C");
        x;  // C
    }
    else {
        console.log("Found an instance not known");
        x;  // D (V2.6 never)
    }
}

compareWithInstanceOf(new ChildB);
compareWithInstanceOf(new ChildC);
compareWithInstanceOf(new ChildD);