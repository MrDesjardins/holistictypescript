// Number vs String
let value1String: string = "1";
let value1Number: number = 1;
// if(value1String == value1Number){
//     console.log("TypeScript doesn't compile");
// }

// Reference comparison
const value1Object = { m1: "test" };
const value2Object = { m1: "test" };
if (value1Object === value2Object) {
    console.log("Should not print this line");
}

// Double vs Triple Equals
let value2String1: string | undefined = undefined;
let value2String2: string | null = null;
if (value2String1 == value2String2) {
    console.log("equal ==");
}

if (value2String1 === value2String2) {
    console.log("equal ===");
}