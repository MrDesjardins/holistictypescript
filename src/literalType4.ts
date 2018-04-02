interface Success {
    success: true;
    httpCode: string;
    payload: string;
}
interface Failure {
    success: false;
    errorMessage: string;
}

function ajax(url: string): Success | Failure { return { success: false, errorMessage: "Error!" }; }
function ajaxCall(): string {
    const ajaxResult = ajax("http://blablac.com");
    if (ajaxResult.success === true) {
        return ajaxResult.payload; // Access to all Success interface members
    } else {
        return ajaxResult.errorMessage; // Access to all Failure interface members
    }
}
const result = ajaxCall();

// Constant

const literalType1 = "constant"; // Type is not string, but "constant"
const literalType2: "constant" = "constant"; // Same as above
let literalType3 = "constant"; // Type is string
let literalType4: "constant" = "constant";  // Type is not string, but "constant"