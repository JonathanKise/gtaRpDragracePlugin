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
    let opponent = GetPlayerName(data.opponentId)
    console.log(opponent);
    if (opponent === false) {
        emitNet('dragrace:testing', data.playerSrc, "Invalid Opponet")
        return;
    } else {
        emitNet('dragrace:testing', data.playerSrc, "Valid Opponet")
        return;
    }
    //emitNet('dragrace:testing', data.playerSrc, testingdata);   
    //emitNet('dragrace:testing', 2, testingdata);   
});