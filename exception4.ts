try{
    throw new Error("Error but doesn't care about the exception or message");
} catch{
    console.log("Catch all exceptions without looking at the exception");
}