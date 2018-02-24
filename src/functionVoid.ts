function functReturnVoid(f: () => void): void {
    const c: void = f();
    console.log(c); // Print the string
}
functReturnVoid(() => { return "I am a string, not void!" });