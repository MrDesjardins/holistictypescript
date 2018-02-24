let myTuple: [number, string];
myTuple = [1, "test"];
const numberVariable: number = myTuple[0];
const stringVariable: string = myTuple[1];

myTuple[3] = "one more";
myTuple[4] = 2;
myTuple[5] = true; // Won't compile (number|string only)