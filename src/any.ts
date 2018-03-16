let xAny: any = "string";
xAny = true;
xAny = { title: "Object with a string member" };
xAny = [1, 2, 3];
xAny = 1;
console.log(xAny.length);  // Undefined
console.log(xAny.asd);     // Undefined
