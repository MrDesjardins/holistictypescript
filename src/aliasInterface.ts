interface IA10 { m: string };
interface IA20 { n: number };
interface AliasWithInterface extends IA10, IA20 { }
const useAlias: AliasWithInterface = { m: "m1", n: 1 };