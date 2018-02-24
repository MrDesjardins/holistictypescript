function delayMessage(milliseconds: number, message: string): Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => { resolve(message); }, milliseconds);
    });
}
async function printWithAsync(): Promise<void> {
    console.log("Start");
    for (let i = 0; i < 10; i++) {
        const randomDelayInMs = Math.floor(50
            + (Math.random() * 5) * 20); // 50-150 ms
        const message = await delayMessage(randomDelayInMs
            , "Msg_" + i + "_" + randomDelayInMs);
        console.log(message);
    }
    console.log("End (after delayed message)");
}
printWithAsync();
/*Start
Msg_0_137
Msg_1_89
Msg_2_141
Msg_3_141
Msg_4_64
Msg_5_56
Msg_6_144
Msg_7_62
Msg_8_79
Msg_9_51
End (after delayed message)*/