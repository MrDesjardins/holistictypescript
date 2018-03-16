interface WideOpen { }
function functionWideOpen(p: WideOpen) { }
functionWideOpen(1);
functionWideOpen({ z: 1 });
functionWideOpen(null); // Doesn't compile
functionWideOpen(undefined) // Doesn't compile