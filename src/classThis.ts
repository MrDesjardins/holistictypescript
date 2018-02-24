class ClassThis {
    constructor() {
        this.eventFunction2 = this.eventFunction2.bind(this);
    }
    private instanceFunction = () => { };
    public attachEvents(): void {
        window.addEventListener("mousedown", this.eventFunction); // #1
        window.addEventListener("mouseup", (e) => this.eventFunction(e)); // #2
        window.addEventListener("mouseleave", this.eventFunction2); // #3
        window.addEventListener("mouseout", this.instanceFunction); // #4
    }
    private eventFunction(e: MouseEvent) { }
    private eventFunction2(e: MouseEvent) { }
}