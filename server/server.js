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
    let opponentD = QBCore.Functions.GetPlayer(Number(data.opponentId));

    let playerC = playerD.PlayerData.money.cash;
    let opponentC = opponentD.PlayerData.money.cash;
    console.log(playerC);
    console.log(opponentC);

    if (!opponentEndpoint || data.opponentId == data.playerSrc) { //CHECKS FOR VALID PLAYER/SELF RACE
        //INVALID OPPONENT MESSAGE GOES HERE
        emitNet('dragrace:testing', data.playerSrc, "Invalid Opponet/Invalid ID type");
        emitNet('dragrace:testing', data.playerSrc, opponentEndpoint);//FOR DEBUG MUST BE REMOVED LATER
        //IF/ELSE STATEMENT BELOW THIS LINE NEEDS TO MOVE TO THE ELSE STATEMENT BELOW. THIS IS ONLY HERE FOR SOLO TESTING
        return;
    } else {
        //MAIN FUNCTION GOES HERE
        emitNet('dragrace:testing', data.playerSrc, "Valid Opponent");
        emitNet('dragrace:testing', data.playerSrc, opponentEndpoint);
        if (playerC < wager || opponentC < wager) { //CHECKS FOR VALID WAGER
            emitNet('dragrace:testing', data.playerSrc, "Invalid Wager");
            return;
        } else { //REMOVES WAGER FROM BOTH PARTIES
            emitNet('dragrace:testing', data.playerSrc, "Valid Wager");
            playerD.Functions.RemoveMoney('cash', wager, "dragrace-won");
            opponentD.Functions.RemoveMoney('cash', wager, "dragrace-won");
        }//FOR DEBUG MUST BE REMOVED LATER
        return;
    }
    //emitNet('dragrace:testing', data.playerSrc, testingdata);   
    //emitNet('dragrace:testing', 2, testingdata);   
});


onNet('dragrace:racepay', (data) => {
    let player = QBCore.Functions.GetPlayer(data.playerSrc);
    if (player) {
        let winnings = data.winnings; // this will need to be doubled here or in the client
        player.Functions.AddMoney('cash', winnings, "dragrace-won");
    } else {
        console.log('Player not found');
    }
});