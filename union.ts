let u1: string | boolean = true;
type UStringBoolean = string | boolean;
let u2: UStringBoolean = true;

// Discriminant

interface InterfaceA {
    discriminant: "InterfaceA";
    m0: number;
}
interface InterfaceB {
    discriminant: "InterfaceB";
    m1: string;
}
interface InterfaceC {
    discriminant: "InterfaceC";
    m2: string;
}
function unionWithDiscriminant(p: InterfaceA | InterfaceB | InterfaceC) {
    switch (p.discriminant) { // Only common members are available
        case "InterfaceA":
            console.log(p.m0); // Only InterfaceA members available
            break;
        case "InterfaceB":
            console.log(p.m1); // Only InterfaceB members available
            break;
        case "InterfaceC":
            console.log(p.m2); // Only InterfaceC members available
            break;
    }
}