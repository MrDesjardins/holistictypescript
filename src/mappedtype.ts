// Before mapped type: require 2 interfaces + 1 function
interface OriginalInterface {
    x: number;
    y: string;
}

interface ReadOnlyOriginalInterface {
    readonly x: number;
    readonly y: string;
}

function mapOriginalInterfaceToBeReadOnly(o: OriginalInterface): ReadOnlyOriginalInterface {
    return {
        x: o.x,
        y: o.y
    };
}

// Generic
type ReadonlyInterface<T> = {
    readonly [P in keyof T]: T[P];
};

function genericInterfaceToReadOnly<T>(o: T): ReadonlyInterface<T> {
    return o;
}

const original: OriginalInterface = { x: 0, y: "1" };
const originalReadonly = genericInterfaceToReadOnly(original);
originalReadonly.x = 3; // error TS2540: Cannot assign to 'x' because it is a constant or a read-only property.

// From TypeScript
const originalReadonlyFromTS = Object.freeze(original);
originalReadonlyFromTS.x = 3; // error TS2540: Cannot assign to 'x' because it is a constant or a read-only property.