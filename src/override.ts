class OverrideMe {
    public OverrideFunction1(): void {
        console.log("OverrideMe>OverrideFunction1");
    }
    protected OverrideFunction2(): void {
        console.log("OverrideMe>OverrideFunction2");
    }
    private OverrideFunction3(): void {
        console.log("OverrideMe>OverrideFunction3");
    }
}

class Overrider extends OverrideMe {
    public OverrideFunction1(): void {
        console.log("1");
        super.OverrideFunction1();
    }
    protected OverrideFunction2(): void {
        console.log("2");
        super.OverrideFunction1();
    }
    // private OverrideFunction3(): void {
    //     console.log("3");
    // }
    public callProtected():void{
        this.OverrideFunction2();
    }
}

const overrideClass = new Overrider();
overrideClass.OverrideFunction1(); // Output: 1
overrideClass.callProtected();  // Output: 2