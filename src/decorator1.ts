export function countinstance<T
    extends { new(...args: any[]): {} }>
    (constructor: T) {
    const wrapper = class extends constructor {
        public static instanceCount = 0;

        constructor(...args: any[]) {
            super();
            wrapper.instanceCount++;
            console.log("Count = " + wrapper.instanceCount);
        }
    }
    return wrapper;
}

@countinstance 
class OneClassWithDecorator{

}
const classDeco1 = new OneClassWithDecorator();
const classDeco2 = new OneClassWithDecorator();