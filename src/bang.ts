function functionForBang(s: string | undefined): void {
    // console.log("The first letter is ", s.charAt(0)); // Doesn't compile
    console.log("The first letter is ", s!.charAt(0));
    const v1 = s;  // v1 type is string | undefined
    const v2 = s!; // v2 type is string
}
functionForBang(undefined);