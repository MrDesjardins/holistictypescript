interface InterfaceIA { ia: number; }
interface InterfaceIB { ib: number; }
class ClassWithImplementA
    implements InterfaceIA {
    public ia: number;

}
class ClassWithImplementB
    extends ClassWithImplementA
    implements InterfaceIB {
    public ib: number;
}