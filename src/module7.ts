import module1_variable1 = require("./module1");
export function lazyLoadWhenInvoked() {
    const _foo: typeof module1_variable1 = require("./module1");
    console.log(_foo.module1_variable1);
}
lazyLoadWhenInvoked();