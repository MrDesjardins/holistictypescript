function funcWithDefault(
      p1: string = "v1"
    , p2?: number
    , p3 = true) {
        console.log("P1", p1); // v1 since undefined
        console.log("P2", p2); // undefined
        console.log("P3", p3); //boolean by inference
    }

funcWithDefault(undefined);
// P1 v1
// P2 undefined
// P3 true
