interface ReturnString {
    (): string
}
function functionWithFunctionAsParameter(p: ReturnString): void {
    const s = p();
    console.log(s);
}
functionWithFunctionAsParameter(() => "Hello");

// ----------- overload -----------
// interface MultipleReturns {
//     (s: string): string;
//     (i: number): number;
// }
// function functionWithFunctionAsParameter2(p: MultipleReturns): void {
//     const s: string = p("1");
//     const i: number = p(2);
//     console.log(s + " " + i.toString());
// }
// const pointer: MultipleReturns = (ss: string) => { return ""; };
// functionWithFunctionAsParameter2(pointer);



function functionWithFunctionAsParameteAnonymously(p: () => string): void {
    const s = p();
    console.log(s);
}