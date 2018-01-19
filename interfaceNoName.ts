interface InterfaceNoFuncName {
    (): string;
    print(p1: string): void;
}

const MyType = ((): InterfaceNoFuncName => {
    const anyObj: any = (): string => { // Must be ANY!
        return "Returned String"; 
    }
    anyObj.print = (p1: string) => {
        console.log(p1);
    }
    return anyObj;
}
); 