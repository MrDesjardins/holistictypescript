type GetReturnedType<T> = T extends ((...args: any[]) => infer R) ? R : T;

function whatIsMyReturnType(): number {
    return 1;
}

type TypeFromReturn = GetReturnedType<typeof whatIsMyReturnType>; // number from 'R'
const dynamicallyTyped: TypeFromReturn = 1;

type TypeFromReturn2 = GetReturnedType<number>; // number from 'T'