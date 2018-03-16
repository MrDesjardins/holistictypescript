enum MyEnum {
    ChoiceA,
    ChoiceB,
    ChoiceC
};
const xMyEnum: MyEnum = MyEnum.ChoiceA;

// - 

enum MyEnum2 {
    ChoiceA, // 0
    ChoiceB = 100, // 100
    ChoiceC, // 101
    ChoiceD = MyEnum.ChoiceC // 2
};
const yMyEnum: MyEnum2 = MyEnum2.ChoiceD;

// -

enum MyStringEnum {
    ChoiceA = "A",
    ChoiceB = "B"
}

// -

enum MyStringAndNumberEnum {
    ChoiceA, // 0
    ChoiceB = "B",
    ChoiceC = 100
}

enum EnumA {
    ChoiceA
}
enum EnumA {
    ChoiceB = 1
}

//

enum Orientation {
    East,
    West,
    North,
    South
};
namespace Orientation {
    export function yourFunction() {
    }
}
let wontUseTheFunction = Orientation.yourFunction();

//

enum Power {
    None = 0,
    Invincibility = 1 << 0,
    Telepathy = 1 << 1,
    Invisibility = 1 << 2,
    Everything = Invincibility | Telepathy | Invisibility
}
let power: Power = Power.Invincibility | Power.Telepathy;
if (power & Power.Telepathy) {
    console.log("Power of telepathy available");
}

let xMyEnum2 = 1; // This is a single line comment
/* This can be spread on 
multiple 
lines */
let yMyEnum2 = 2; 
