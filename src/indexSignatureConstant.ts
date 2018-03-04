const Foo = "Foo";
const Bar = "Bar";
const Zaz = "Zaz";

const objectWithConstantProperties = {
    [Foo]: 100,
    [Bar]: "hello",
    [Zaz]: () => { },
};

let a12 = x[Foo]; 
let b2334 = x[Bar];

// const SERIALIZE = Symbol("serialize-method-key");
const SERIALIZE = "serialize-method-key";
interface Serializable {
    [SERIALIZE](obj: {}): string;
}