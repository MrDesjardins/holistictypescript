class ArgumentNullException extends Error {
    constructor(public name: string) {
        super("Argument was undefined");
        Object.setPrototypeOf(this, ArgumentNullException.prototype);
    }
}
class ReferenceException extends Error {
    constructor(public x: number, public y: number) {
        super("Reference was undefined");
        Object.setPrototypeOf(this, ReferenceException.prototype);
    }
}
function throwTwoExceptions(switcher: boolean) {
    if (switcher) {
        throw new ArgumentNullException("Switcher");
    }
    throw new ReferenceException(1, 2);
}
try {
    throw new ArgumentNullException("Switcher");
}
catch (ex) {
    if (ex instanceof ArgumentNullException) {
        console.log("I can access name:" + ex.name);
    } else if (ex instanceof ReferenceException) {
        console.log("I can access x and y:" + ex.x + " and " + ex.y);
    }
}