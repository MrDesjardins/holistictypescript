class WithReadonly {
    public readonly x: number = 3;
    public constructor(public readonly y: number = 4) {
        this.x = 1; // Not required, but work
        this.y = 5; // Not required, but work
    }
    private funct(): void {
        // this.x = 3; // Won't compile
    }
}