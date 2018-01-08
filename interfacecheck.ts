interface ICheck1 extends ICheck2 {
    m1: number;
}
interface ICheck2 {
    m2: string;
}
function checkInterfaceICheck1(obj: any): obj is ICheck1 {
    return (obj as ICheck1).m1 !== undefined;
}
function checkInterfaceICheck2(obj: any): obj is ICheck2 {
    return (obj as ICheck2).m2 !== undefined;
}
function print(obj: ICheck1 | ICheck2): void {
    if (checkInterfaceICheck1(obj)) {
        console.log("I have access to m1", obj.m1);
    }
    if (checkInterfaceICheck2(obj)) {
        console.log("I have access to m2", obj.m2);
    }
}
const obj1: ICheck1 = { m1: 1, m2: "2" };
const obj2: ICheck2 = { m2: "2" };
console.log("Object1");
print(obj1);
console.log("Object2");
print(obj2);
/*
Object1
I have access to m1 1
I have access to m2 2
Object2
I have access to m2 2
*/