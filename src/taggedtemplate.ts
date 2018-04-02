const number = 84
const number2 = 100;
const endResult = analyzeString`The number is ${number} which is not like the second number ${number2}`;

// literals: 
// [0] "The number is"
// [1] " which is not like the second number "

// placeholders:
// [0] 84
// [1] 100
function analyzeString(literals: TemplateStringsArray, ...placeholders: any[]) {
    let result = "";
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += "*" + placeholders[i] + "*";
    }
    result += literals[literals.length - 1];
    return result;
}
console.log(endResult);