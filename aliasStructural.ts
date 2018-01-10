type TypeS0 = string;
const ts0: string = "String";
const ts1: TypeS0 = "String as well";

type TypeS1 = { id: string };
interface IS1 { id: string };
let ts2: TypeS1;
const ts3: IS1 = { id: "123" };
ts2 = ts3;


// Branding with a unique field
type TypeS2 = { id: string, kind: "types2" };
interface IS2 { id: string, kind: "is2" };
let ts4: TypeS2;
const ts5: IS2 = { id: "123", kind: "is2" };
ts4 = ts5; // Doesn't work! kind should be "types2"


// Intersect with primitive
type USD = number & { name: "USD" };
type CAD = number & { name: "CAD" };

const usd: USD = 1 as USD;
const cad: CAD = 2 as CAD;

function sum(c1: USD, c2: USD): number {
    return (c1 + c2);
}
sum(usd, usd);
sum(cad, usd); // Error!  

// Fake private members branding
interface BaseIpo { m: string };
interface Ipo1 extends BaseIpo { _kindIpo1: any; }
interface Ipo2 extends BaseIpo { _kindIpo2: any; }
type Ipo3 = { _kindIpo3: any; } & BaseIpo;
let ipo1: Ipo1 = { m: "1" } as Ipo1;
let ipo2: Ipo2 = { m: "1" } as Ipo2
let ipo3: Ipo3 = { m: "1" } as Ipo3;
ipo1 = ipo2; // Doesn't work since the underscore field is different