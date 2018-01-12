//Tsconfig.json
// "es2015",
// "esnext.asynciterable"

// Step1
(<any>Symbol).asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");
// Step 2
function delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
    });
}
function getRandomSetChars(): string {
    const random = 1 + Math.floor(Math.random() * 5);
    let wordString = "";
    for (let i = 0; i < random; i++) {
        const letter = 97 + Math.floor(Math.random() * 26);
        wordString += String.fromCharCode(letter);
    }
    return wordString;
}
// Step 3
async function* getRandomSetsChars(): AsyncIterableIterator<string> {
    for (let i = 0; i < 10; i++) {
        yield getRandomSetChars(); // return a random set of char
        await delay(200); // wait
        yield* [getRandomSetChars(), getRandomSetChars()]; // return two random sets of char
    }
}
// Step 4
async function addWordsAsynchronously() {
    for await (const x of getRandomSetsChars()) {
        console.log("Iterator loop:" + x);
    }
}
addWordsAsynchronously();

// This method use async keyword but also the function*. This later is the one that use the asynciterator.
// In this method, we call a method that generate random character to generate random words. This is only for the purpose of this example and we will loop 50 times which will insert a single random word by yielding the word. This is done by using “yield”. We could stop that, but the async iterator also allows us to return a batch of data. To demonstrate it, let’s await 1 sec with the delay method we previously created and yield 2 random words. If we go back to the application, you can see that the count of word is increasing, as well as in the log you can see the word added. The game is not disrupted at all, and is getting updated.
 