class ClassParameterProperty {
    constructor(public m1: string, m2: string) { }
}
const cpp = new ClassParameterProperty("asd", "qwe");
cpp.m1; // Available
// cpp.m2; // Not available