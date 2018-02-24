let myObject = { name: "test" };
let myOtherObject: typeof myObject;
myOtherObject = { name: "test2" };
type TypeFromTypeOf = typeof myObjectTypedWithCurlyType;

function f(param1: number | string) {
    if (typeof param1 === "number") {
        console.log("It's a number");
    }
    if (typeof param1 === "string") {
        console.log("It's a string");
    }
}
