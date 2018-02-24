const prop1 = Symbol();

const obj = {
    [prop1]: "p1"
};

console.log(obj.prop1);  // undefined
console.log(obj[prop1]); // "p1"