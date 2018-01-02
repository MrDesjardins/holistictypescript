enum EnumWithChoices {
    ChoiceA,
    ChoiceB,
}

function functionReturnStringFromEnum(c: EnumWithChoices): string {
    switch (c) {
        case EnumWithChoices.ChoiceA:
            return "A";
        case EnumWithChoices.ChoiceB:
            return "B";
        default:
            return unhandledChoiceFromEnum(c);
    }
}

function unhandledChoiceFromEnum(x: never): never {
    throw new Error("Choice not defined");
}