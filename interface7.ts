interface WideOpen { }
function f(p: WideOpen) { }
f(1);
f({ z: 1 });
f(null); // Doesn't compile
f(undefined) // Doesn't compile