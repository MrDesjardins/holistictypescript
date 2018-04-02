let variable: string | boolean | number = 1;
function displayVariable(param: string | boolean | number) {
    if (typeof param === "string") {
        console.log(param.length); // Narrowed down to string
    }
    if (typeof param === "boolean") {
        console.log(param ? "Yes" : "No"); // Narrowed down to boolean
    }
    if (typeof param === "number") {
        console.log(param.toPrecision(2)); // Narrowed down to number
    }
}
displayVariable(variable); // Display 1.0