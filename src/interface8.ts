interface EntityConstructor {
    new(value: number): EntityInterface;
}
interface EntityInterface {
    functionA(): void;
}

function entityFactory(ctor: EntityConstructor, value: number): EntityInterface {
    return new ctor(value);
}

class EntityA implements EntityInterface {
    constructor(value: number) { }
    functionA(): void {
        console.log("beep beep");
    }
}
class EntityB implements EntityInterface {
    constructor(value: number) { }
    functionA() {
        console.log("tick tock");
    }
}

let digital = entityFactory(EntityA, 1);
let analog = entityFactory(EntityB, 2);