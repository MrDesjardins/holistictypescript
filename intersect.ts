type T1 = { x: string };
type T2 = { y: number };
type T3 = { z: boolean };
type IntersectType1 = T1 & T2 & T3;
type IntersectType2 = T1 & T2;
type IntersectType3 = T3 & T1;

// With interface and intersect

interface I1 {
    x: string;
}

interface I2 {
    y: number;
}

interface I3 {
    z: boolean;
}

type IntersectWithInterface = I1 & I2 & I3;
const with3Interfaces: IntersectWithInterface = { x: "1", y: 1, z: true };

interface CombineI1 extends I1, I2, I3 { }
interface CombineI2 extends I1, I2 { }
interface CombineI3 extends I3, I1 { }



function intersectOnTheFly(t: I1 & I2) { }
function intersectGeneric<TT1, TT2>(t1: TT1, t2: TT2): TT1 & TT2 {
    const returnValue = <TT1 & TT2>{};
    for (let index in t1) {
        (returnValue as TT1)[index] = t1[index];
    }
    for (let index in t2) {
        (returnValue as TT2)[index] = t2[index];
    }
    return returnValue;
}