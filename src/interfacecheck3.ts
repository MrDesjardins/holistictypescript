interface ICheckBase_3 {
    baseField:string;
}
interface ICheck1_3 extends ICheckBase_3 {
    kind: "ICheck1_3";
    m1: number;
}
interface ICheck2_3 {
    kind: "ICheck2_3";
    m2: string;
}
function print(obj: ICheck1_3 | ICheck2_3): void {
    switch (obj.kind) {
        case "ICheck1_3":
            console.log("I have access to m1", obj.m1);
            break;
        case "ICheck2_3":
            console.log("I have access to m2", obj.m2);
            break;
        default:
            unhandledChoiceFromEnum(obj);
    }
}
function unhandledChoiceFromEnum(x: never): never {
    throw new Error("Choice not defined");
}