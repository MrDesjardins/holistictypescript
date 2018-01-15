function functRest(p1: string, ...remaining: string[]): void { }
functRest("p1", "p2", "p3");

function functBefore(p1: string, remaining: string[]): void { }
functBefore("p1", ["p2", "p3"]);