function checkIfDefined<T>(value?: T): void {
    // Better approach would be : (value !== null && value !== undefined)
    if (value) {
        console.log("Value " + value + " is defined");
    } else {
        console.log("Value " + value + " is NOT defined");
    }
}

checkIfDefined(null); // Not defined (okay!)
checkIfDefined(undefined); // Not defined (okay!)
checkIfDefined(true); // Defined (okay!)
checkIfDefined(false); // Note defined (!!! Unexpected !!!)
checkIfDefined(0); // Note defined (!!! Unexpected !!!)
checkIfDefined(1);  // Defined (okay!)
