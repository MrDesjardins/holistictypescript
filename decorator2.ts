export function autobind(
    target: Object
    , key: string | symbol
    , descriptor: PropertyDescriptor)
    : PropertyDescriptor {
    const fn = descriptor.value;
    return {
        configurable: true,
        get() {
            const boundFn = fn.bind(this);
            Object.defineProperty(this, key, {
                value: boundFn,
                configurable: true,
                writable: true
            });
            return boundFn;
        }
    };
}


class ClassDecoratorWithMethod {
    private x: string = "ValueHere";
    constructor() {
        process.on("uncaughtException", this.eventCallback);
        throw Error("My error"); // Will call the callback from previous line
    }
    @autobind
    private eventCallback(): void {
        console.log("This is not window but the class", this.x);
    }
}

const classDecoWithMeth = new ClassDecoratorWithMethod();
// Without Decorator:
// This is not window but the class ValueHere
// With Decorator:
// This is not window but the class undefined