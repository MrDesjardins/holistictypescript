interface ReadOnlyInterface {
    readonly x: number;
    readonly y: string;
}
const roi1: ReadOnlyInterface = {}; // Doesn't compile
const roi2: ReadOnlyInterface = {
    x: 1,
    y: "2"
};