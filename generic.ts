const a: Array<string> = new Array("abc", "def");
const s: string = a[0];
console.log(s.substr(0, 1)); // Access to string without casting


interface MyType {
    id: number;
}
interface AnotherType extends MyType {
}
const arg: AnotherType = { id: 1 };
function genericFunction<T extends MyType>(p1: T) {
}
genericFunction(arg); // This is legit
genericFunction({ id: 123 }); // This is legit
genericFunction("doesn't compile");


interface IMyInterfaceWithConstructor<T> {
    new(param: string): T;
}

function createInstance<T>(ctor: IMyInterfaceWithConstructor<T>): T {
    return new ctor("test");
}

interface MyGenericWithDefault<T = string> {
    myTypeWhichIsStringIfNotSpecified: T;
}
const myGeneric1: MyGenericWithDefault<number> = { myTypeWhichIsStringIfNotSpecified: 1 };
const myGeneric2: MyGenericWithDefault = { myTypeWhichIsStringIfNotSpecified: "string" };

function genericInferred<T>(param:T){
}
genericInferred("str");