// --- Var example

function varFunction(){
    var x = "111";

    if(true){
        var x = 999;
    }
    console.log(x); // 999
}
// varFunction();

// --- Let example

function letFunction(){
    let x = "111";

    if(true){
        let x = 999;
    }
    console.log(x); // "111"
}
// letFunction();

// --- Const example

function constFunction(){
    const x = "111";
    x = "this won't compile"; // This won't compile!
    if(true){
        const x = 999;
    }
    console.log(x); // "111"
}
constFunction();