export function countinstance<T
    extends { new(...args: any[]): {} }>
    (constructor: T) {
    console.log("This is called once per class type");
    const wrapper = class extends constructor {
        public static instanceCount = 0;

        constructor(...args: any[]) {
            super();
            wrapper.instanceCount++;
            console.log("Called every instantiation. Count = " + wrapper.instanceCount);
        }
    }
    return wrapper;
}

@countinstance
class OneClassWithDecorator {

}
const classDeco1 = new OneClassWithDecorator();
const classDeco2 = new OneClassWithDecorator();