interface MyThisInterface {
    m1: string[];
    m2: number[];
    functionA(this: MyThisInterface): () => string;
}

let vMyThisInterface: MyThisInterface = {
    m1: ["hearts", "spades", "clubs", "diamonds"],
    m2: [1, 2, 3],
    functionA: function (this: MyThisInterface) {
        return () => {
            return this.m1[0];
        }
    }
}

vMyThisInterface.functionA();