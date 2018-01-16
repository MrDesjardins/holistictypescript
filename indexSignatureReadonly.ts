interface ReadonlyCustomMap {
    readonly [index: string]: { message: string }
}

const map: ReadonlyCustomMap = {
    "a": { message: "b" }
};
console.log(map["a"]);
map["b"] = "b"; // Doesn't compile