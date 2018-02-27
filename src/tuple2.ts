let firstTuple: [number, number] = [1, 2];
let secondTuple: [number, number, number] = [3, 4, 5];
secondTuple = firstTuple; // Doesn't compile type mismatch 
firstTuple = secondTuple; // Doesn't compile length incompatible 