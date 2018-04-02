let myObject = { name: "test" };
let myOtherObject: typeof myObject;
myOtherObject = { name: "test2" };
type TypeFromTypeOf = typeof myObject;

function f(param1: number | string | undefined) {
    if (param1 === undefined) {
        console.log("It's undefined");
    } else if (typeof param1 === "number") {
        console.log("It's a number");
    } else if (typeof param1 === "string") {
        console.log("It's a string");
    }
}
