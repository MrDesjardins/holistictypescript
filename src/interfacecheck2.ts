interface ICheck1 extends ICheck2 {
    kind: "ICheck1";
    m1: number;
}
interface ICheck2 {
    kind: "ICheck2";
    m2: string;
}
function print(obj: ICheck1 | ICheck2): void {
    if (obj.kind === "ICheck1") {
        console.log("I have access to m1", obj.m1);
    }
    if (obj.kind === "ICheck2") {
        console.log("I have access to m2", obj.m2);
    }
}
const obj1: ICheck1 = { kind: "ICheck1", m1: 1, m2: "2" };
const obj2: ICheck2 = { kind: "ICheck2", m2: "2" };
console.log("Object1");
print(obj1);
console.log("Object2");
print(obj2);
/*
Object1
I have access to m1 1
Object2
I have access to m2 2
*/