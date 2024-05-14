let QBCore = global.exports['qb-core'].GetCoreObject();

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

    let playerD = QBCore.Functions.GetPlayer(data.playerSrc);
    let opponentD = QBCore.Functions.GetPlayer(data.opponentId);
    let playerC = playerD.PlayerData.money.cash;
    let opponentC = opponentD.PlayerData.money.cash;

    if (!opponentEndpoint || data.opponentId == data.playerSrc) {
        //INVALID OPPONENT MESSAGE GOES HERE
        emitNet('dragrace:testing', data.playerSrc, "Invalid Opponet/Invalid ID type")
        emitNet('dragrace:testing', data.playerSrc, opponentEndpoint)//FOR DEBUG MUST BE REMOVED LATER
        if (playerC < wager || opponentC < wager) {
            emitNet('dragrace:testing', data.playerSrc, "Invalid Wager")
            return;
        } else {
            emitNet('dragrace:testing', data.playerSrc, "Valid Wager")
        }
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