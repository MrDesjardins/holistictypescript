let listArrayPrimitive = {
    m1: "valuem1",
    m2: 2
};
const keys = Object.keys(listArrayPrimitive);
const entries = Object.entries(listArrayPrimitive); // require to have "lib": [ "es2017.object" ]

console.log("keys", keys);
console.log("entries", entries);

// keys [ 'm1', 'm2' ]
// entries [ [ 'm1', 'valuem1' ], [ 'm2', 2 ] ]
