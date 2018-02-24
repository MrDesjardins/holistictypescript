function functParams(p1: string, err: (e: Error) => void): void {}

functParams("test", () => { }); // Parameter e:Error not required
functParams("test", (whatEver:Error) => { }); // Name can be changed
functParams("test", (e:Error) => { });