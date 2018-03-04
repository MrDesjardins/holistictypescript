class C {
    private m1: number;
    private m2: string = "2";
    private m3: boolean;

    public constructor() {
        this.m1 = 1;
        this.init();
    }
    private init():void {
        this.m3 = true;
    }
}


// ----

class C2 {
    private m1: number;
    private m2: string = "2";
    private m3: boolean;

    public constructor(b: boolean) {
        this.m1 = 1;
        if (b) {
            this.m3 = true;
        }   
    }
}
