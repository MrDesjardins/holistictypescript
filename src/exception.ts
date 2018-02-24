function throw1() {
    throw "error in string";
}

function throw2() {
    throw Error("Message Here");
}

function throw3() {
    const err: Error = {
        name: "Error",
        message: "Message"
    };
    throw err;
}

try {
    throw1();
} catch (e) {
    console.log("Exception 1", e); // String
}
try {
    throw2();
} catch (e) {
    console.log("Exception 2", e); // Full stack
}
try {
    throw3();
} catch (e) {
    console.log("Exception 2", e); // Object
}

