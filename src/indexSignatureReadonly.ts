interface ReadonlyCustomMap {
    readonly [index: string]: { message: string }
}

const map: ReadonlyCustomMap = {
    "a": { message: "b" }
};
console.log(map["a"]);
map["b"] = "b"; // Doesn't compile


interface RERERERERER {
    readonly [index: {x:string}]: { message: string }
}
