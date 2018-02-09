Promise.resolve("value to be in the argument of then")
    .then((response: string) => {
        throw new Error("Error message");
    })
    .then((response: string) => {
        console.log("Second then", response); 
        return Promise.resolve(response);
    })
    .catch((err: Error) => {
        console.log("Error Message", err.message);
    })
    .then((response: string) => {
        console.log("Always called"); 
    })

// Error Message Error message
// Always called