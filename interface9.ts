interface pppp1 {
    kind: "p1";
}

interface pppp2 extends pppp1{
    kind: "p2";
}

let ppp1212: pppp1 = {kind: "p1"};
let eee: pppp2 = ppp1212;