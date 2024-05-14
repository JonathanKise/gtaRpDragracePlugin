let player1 = null;
let player2 = null;
onNet('dragrace:start', (data) => {
    console.log(data.playerSrc);
    console.log(data.opponentId);
    console.log(data.playerX);
    console.log(data.playerY);
    console.log(data.playerZ);
    console.log(data.playerHeading);
    console.log(data.checkpointX);
    console.log(data.checkpointY);
    console.log(data.checkpointZ);
    let testingdata = "Hello E";
    let opponentEndpoint = GetPlayerEndpoint(data.opponentId);
    console.log(opponentEndpoint);
    if (!opponentEndpoint) {
        emitNet('dragrace:testing', data.playerSrc, "Invalid Opponet")
        emitNet('dragrace:testing', data.playerSrc, opponentEndpoint)
        return;
    } else {
        if (data.opponentId === data.playerSrc) {
            emitNet('dragrace:testing', data.playerSrc, "Thats you")
            return;
        } else {
            emitNet('dragrace:testing', data.playerSrc, "Valid Opponent")
            return;
        }
    }
    //emitNet('dragrace:testing', data.playerSrc, testingdata);   
    //emitNet('dragrace:testing', 2, testingdata);   
});