function compareWithInstanceOf(i: number) {
    console.log("Parameter value", i);
    let i: number = 10;
    console.log("Variable value", i);
    for (let i = 100; i < 101; i++) {
        console.log("For-statement value", i);
        for (let i = 200; i < 201; i++) {
            console.log("For-statement value 2", i);
        }
    }
    console.log("Variable value", i);
}
compareWithInstanceOf(0);