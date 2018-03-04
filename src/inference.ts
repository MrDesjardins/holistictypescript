const infHello: "hello" = "hello"; // Explicit
const infWord = "world"; // Implicit using inference to "world"

let infHello2: "hello" = "hello"; // Explicit
let infWord2 = "world"; // Implicit using inference to string

let worldString: string = "world";

let windeningToString: string = infHello; // Compile because of windening
let narrowingToWorld: "world" = worldString; // Doesn't compile