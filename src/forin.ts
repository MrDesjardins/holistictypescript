let list1: (number | string)[] = [1, 2, 3, "a", "b", "c"];
for (let i in list1) {
    console.log(i); // 0, 1, 2, 3, 4, 5
}

let list2: (number | string)[] = [1, 2, 3, "a", "b", "c"];
for (let i of list2) {
    console.log(i); // 1, 2, 3, "a", "b", "c"
}
console.log("-");
let list3: (number | string)[] = [1, 2, 3, "a", "b", "c"];
list3.forEach(
    (v: string | number,
        index: number,
        array: (string | number)[]
    ) => {
        console.log("Value " + v + " at position " + index);
    });
// Value 1 at position 0
// Value 2 at position 1
// Value 3 at position 2
// Value a at position 3
// Value b at position 4
// Value c at position 5