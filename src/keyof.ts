// Interface's members
interface InterfaceWithMembers {
    id: number; title: string; createdBy: Date;
}

const members: keyof InterfaceWithMembers = "id"; // Only accept id, title or createdBy

// Type's values
type TypeToKeyOf = "north" | "south" | "east" | "west";
function fKeyOfParameter(direction: TypeToKeyOf) { }
fKeyOfParameter("no"); // Doesn't compile
fKeyOfParameter("north");

// -
const iWithMembersForKeyOf: InterfaceWithMembers =
    { id: 1, title: "1", createdBy: new Date() };

function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const id = prop(iWithMembersForKeyOf, "id"); // the value 1 of type number