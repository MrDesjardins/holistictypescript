class ClassModifier {
    public m1: string;
    protected m2: string;
    private m3: string;
}
class ClassModifier2 extends ClassModifier{
    public m4: string;
    protected m5: string;
    private m6: string;
    private m7():void{
        this.m1;
        this.m2;
        // m3 is not accessible
    }
}
const classModified = new ClassModifier();
classModified.m1; // Only member available
const classModifier2 = new ClassModifier2();
classModifier2.m1; // 1/2 member available
classModifier2.m4; // 2/2 member available