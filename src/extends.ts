type TypeToExtends = { x: number };
interface InterfaceToExtends { x: number };

class ClassImplementsInterface implements InterfaceToExtends { x: number }
class ClassImplementsType implements TypeToExtends { x: number }
interface InterfaceExtendsInterface extends InterfaceToExtends { x: number }
interface InterfaceExtendsType extends TypeToExtends { x: number }

type a = InterfaceToExtends & InterfaceExtendsType;
// interface x = InterfaceToExtends & InterfaceExtendsType; // Doesn't compile