interface InterfaceMap {
    [id: string]: string;
    m1: string;
    // m2: Date; // Doesn't compile, must be string
}

const im1: InterfaceMap = { m1: "Member" };
im1.m1 = "Member2";
im1["m1"] = "Member3";
im1["m2"] = "Member4";
console.log("Dictionary Values", im1);
// Dictionary Values { m1: 'Member3', m2: 'Member4' }