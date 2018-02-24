class ClassThatWillBeExtended {
    m1: string;
    constructor() { }
    private m2(): void { }
    public m3(): void { }

}
interface InterfaceThatExtendsClass extends ClassThatWillBeExtended {
    m1: string;
}
