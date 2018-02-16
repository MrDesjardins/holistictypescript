function undefinedOptional1(a: number | undefined, b: number) {
}
undefinedOptional1(undefined, 1);

function undefinedOptional2F(a?: number, b: number) { // Doesn't compile because a is using optional: ?
}
undefinedOptional2F(); // Doesn't compile because of b is after a the optional
function undefinedOptional3F(a: number, b: number | undefined) { }
undefinedOptional3F(a); // Doesn't compile, must pass for "b" undefined if not needed