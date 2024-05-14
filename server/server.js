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
    let wager = data.wager;
    console.log(opponentEndpoint);
    console.log(data.playerSrc);
    console.log(data.opponentId);
    if (!opponentEndpoint || data.opponentId == data.playerSrc) {
        //INVALID OPPONENT MESSAGE GOES HERE
        emitNet('dragrace:testing', data.playerSrc, "Invalid Opponet/Invalid ID type")
        emitNet('dragrace:testing', data.playerSrc, opponentEndpoint)//FOR DEBUG MUST BE REMOVED LATER
        return;
    } else {
        //MAIN FUNCTION GOES HERE
        emitNet('dragrace:testing', data.playerSrc, "Valid Opponent")
        emitNet('dragrace:testing', data.playerSrc, opponentEndpoint)//FOR DEBUG MUST BE REMOVED LATER
        return;
    }
    //emitNet('dragrace:testing', data.playerSrc, testingdata);   
    //emitNet('dragrace:testing', 2, testingdata);   
});