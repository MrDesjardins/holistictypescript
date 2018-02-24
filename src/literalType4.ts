interface Success {
    success: true;
    httpCode: string;
    payload: string;
}
interface Failure {
    success: false;
    errorMessage: string;
}
function ajaxCall(): Success | Failure {
    const ajaxResut = ajax("http://blablac.com");
    if (ajaxResult.error) {
        return { errorMessage: ajaxResult.error };
    } else {
        return {
            httpCode: ajaxResult.code,
            payload: ajaxResult.data
        };
    }
}
const result = ajaxCall();
if (result.success) {
    console.log(result.payload);
} else {
    console.log(result.errorMessage);
}

// Constant

const literalType1 = "constant"; // Type is not string, but "constant"
const literalType2: "constant" = "constant"; // Same as above
let literalType3 = "constant"; // Type is string
let literalType4: "constant" = "constant";  // Type is not string, but "constant"