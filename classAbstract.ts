abstract class ClassAbstract {
    abstract member1: string;
    abstract function1(): string;

}

class ClassExtendAbstract extends ClassAbstract {
    member1: string; // This is public
    public function1(): string {
        return "f1";
    }
}

const abstObj1 = new ClassAbstract(); // Doesn't compile
const abstObj2 = new ClassExtendAbstract();
