async function getVariableLazyLoaded1(): Promise<string> {
    const mod1 = await import("./module1");
    const varFromOtherModule = await mod1.module1_variable1;
    return Promise.resolve(varFromOtherModule);
}

function getVariableLazyLoaded2(): Promise<string> {
    return import(/* webpackChunkName: "bundleAbc" */"./module1").then(mod1 => {
        return mod1.module1_variable1;
    });
}

