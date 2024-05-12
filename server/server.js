let player1 = null;
let player2 = null;
onNet('dragrace:start', (data) => {
    console.log(data.playerSrc);
    console.log(data.opponentName);
    console.log(data.playerX);
    console.log(data.playerY);
    console.log(data.playerZ);
    console.log(data.playerHeading);
    console.log(data.checkpointX);
    console.log(data.checkpointY);
    console.log(data.checkpointZ);
    let testingdata = "Hello E";
    emitNet('dragrace:testing', 1, testingdata);   
    emitNet('dragrace:testing', 2, testingdata);   
});