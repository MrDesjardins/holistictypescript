
function functionWithOverload(param1: number): boolean;
function functionWithOverload(param1: number, param2: string): string;

function functionWithOverload(
    param1: number
    , param2: string = "default"
    , param3?: string): boolean | string {
    if (param3 === undefined) {
        return "string";
    }
    return true;
}