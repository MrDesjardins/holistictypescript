interface InterfaceHierarchical1 {
    m1: string;
}
interface InterfaceHierarchical2 extends InterfaceHierarchical1 {
    m2: string;
}
const ih1: InterfaceHierarchical2 = {
    m1: "m1",
    m2: "m2"
};