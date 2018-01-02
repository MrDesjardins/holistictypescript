let x: any = "string";
x = true;
x = { title: "Object with a string member" };
x = [1, 2, 3];
x = 1;
console.log(x.length);  // Undefined
console.log(x.asd);     // Undefined
