interface ICheck1 extends ICheck2 {
    kind: "ICheck1";
    m1: number;
}
interface ICheck2 {
    kind: "ICheck2";
    m2: string;
}
function print(obj: ICheck1 | ICheck2): void {
    switch (obj.kind) {
        case "ICheck1":
            console.log("I have access to m1", obj.m1);
            break;
        case "ICheck2":
            console.log("I have access to m2", obj.m2);
            break;
        default:
            unhandledChoiceFromEnum(obj);
    }
}
function unhandledChoiceFromEnum(x: never): never {
    throw new Error("Choice not defined");
}