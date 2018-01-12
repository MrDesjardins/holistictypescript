interface ParameterType { m1: number }
interface NotRelatedType { m1: number, m2: string, m3: boolean }
interface NotRelatedTypeNoM1Number { m1: string }

const i1: ParameterType = { m1: 1 };
const i2: NotRelatedType = { m1: 1, m2: "1", m3: true };
const i3: NotRelatedTypeNoM1Number = { m1: "1" };

function IWantParameterType(p: ParameterType): void { }
IWantParameterType(i1);
IWantParameterType(i2);
// IWantParameterType(i3); // Doesn't compile