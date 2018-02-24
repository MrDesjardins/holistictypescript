function switchFunction(a: number): void {
    switch (a) {
        case 1: {
            let variableInCase1 = "test";
            console.log(variableInCase1);
            break;
        }
        case 2: {
            let variableInCase1 = "test2"; // Error! Cannot redeclare
            console.log(variableInCase1);
            break;
        }
    }
}