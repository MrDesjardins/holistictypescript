interface ICheck_Base{
    basem1:string;
}
interface ICheck1_2 extends ICheck_Base {
    kind: "ICheck1_2";
    m1: number;
}
interface ICheck2_2 extends ICheck_Base {
    kind: "ICheck2_2";
    m2: string;
}
function print(obj: ICheck1_2 | ICheck2_2): void {
    if (obj.kind === "ICheck1_2") {
        console.log("I have access to m1", obj.m1);
    }
    if (obj.kind === "ICheck2_2") {
        console.log("I have access to m2", obj.m2);
    }
}
const obj1_1: ICheck1_2 = { kind: "ICheck1_2", m1: 1, basem1: "2" };
const obj2_2: ICheck2_2= { kind: "ICheck2_2", m2: "2", basem1: "123" };
console.log("Object1");
print(obj1_1);
console.log("Object2");
print(obj2_2);
/*
Object1
I have access to m1 1
Object2
I have access to m2 2
*/