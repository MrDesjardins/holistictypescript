
// type InterfaceB<R, S> = (p1: S, p2: R) => R;
// interface InterfaceA<S> {
//     (action: S): S;
// }
// interface InterfaceA<S> {
//     <R>(action: InterfaceB<R, S>): R;
// }
// const x: InterfaceA<string> = <S, R>(z: S | InterfaceB<R, S>): InterfaceA<S> => {
//     if (typeof z === "function") {
//         var a2: InterfaceB<R, S> = (p: S, p2: R) => { return z(p, p2); };
//         return a2;
//     } else {
//         var a1: (action: S) => S = (action: S) => { return z; };
//         return a1;
//     }
// };


// const result = x("This should take the (action:R) signature since it's a single value and not a function")
// console.log(result);