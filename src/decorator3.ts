function capitalize() {
    return (
        target: Object
        , key: string | symbol
        , descriptor: PropertyDescriptor
    ) => {
        const originalGet = descriptor.get;
        if (originalGet !== undefined) {
            descriptor.get = function () {
                return (() => {
                    const valueFromOriginal =
                        originalGet.call(this) as string;
                    return valueFromOriginal.toUpperCase();
                })();
            };
        }
    };
}
class ClassWithAccessorDecorator {
    public constructor(private myString: string) {
    }

    @capitalize()
    public get format(): string {
        return this.myString;
    }
}
const objAccessorDecorator = new ClassWithAccessorDecorator("test");
console.log("String value", objAccessorDecorator.format);
// String value TEST