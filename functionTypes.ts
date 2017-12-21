
type InterfaceB<R, S> = (param1: S, param2: R) => R;
interface InterfaceA<S> {
    <R>(action: R): R;
}
interface InterfaceA<S> {
    <R>(action: InterfaceB<R, S>): R;
}
const x: InterfaceA<string> = (): InterfaceA<string> => {
    var a1: (action: number) => number = (action: number) => { return 1; };
    var a2: (action: (p: string, p2: number) => number) => number = (action: (p: string, p2: number) => number) => { return 2; };
    return { a1, a2 } as any;
};


const result = x("This should take the (action:R) signature since it's a single value")
console.log(result);