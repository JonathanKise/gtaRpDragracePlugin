let checkpointX = 0, checkpointY = 0, checkpointZ = 0;
let Winner = null;
let distanceOfRace = 10;

RegisterCommand('dragrace', (source, args, rawCommand) => {

   

    let onces = 0;

   let playerSrc = GetPlayerServerId(PlayerId());


   const [playerX, playerY, playerZ] = GetEntityCoords(PlayerPedId(), true);

    let playerHeading = GetEntityHeading(PlayerPedId());
    [checkpointX, checkpointY, checkpointZ] = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, distanceOfRace, 0.0);
    let checkpoint = CreateCheckpoint (1, playerX, playerY, playerZ-1, playerX, playerY, playerZ, 5.0, 255, 0, 0, 200, 0);
    let checkpoint2 = CreateCheckpoint (1, checkpointX, checkpointY, checkpointZ-1, playerX, playerY, playerZ, 5.0, 255, 0, 0, 200, 0);
   

    let data = {
      playerSrc: GetPlayerServerId(PlayerId()),
      opponentId: args[0],
      wager: args[1],
      playerX: playerX,
      playerY: playerY,
      playerZ: playerZ,
      playerHeading: GetEntityHeading(PlayerPedId()),
      checkpointX: checkpointX,
      checkpointY: checkpointY,
      checkpointZ: checkpointZ
  };
  
  emitNet('dragrace:start', data);
   
   
    
  

}, false);


onNet('dragrace:testing', (testingdata) => {
  console.log(testingdata);
});



function createCheckpoints(distanceOfRace) {
  const [playerX, playerY, playerZ] = GetEntityCoords(PlayerPedId(), true);
  let playerHeading = GetEntityHeading(PlayerPedId());
  console.log(playerHeading + " is the player's heading");
  const [checkpointX, checkpointY, checkpointZ] = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, distanceOfRace, 0.0);
  let checkpoint = CreateCheckpoint (1, playerX, playerY, playerZ-1, playerX, playerY, playerZ, 5.0, 255, 0, 0, 200, 0);
  let checkpoint2 = CreateCheckpoint (1, checkpointX, checkpointY, checkpointZ-1, playerX, playerY, playerZ, 5.0, 255, 0, 0, 200, 0);
  return [checkpoint, checkpoint2];
}

function isRaceOver() {

  if((GetDistanceBetweenCoords(playerX, playerY, playerZ, checkpointX, checkpointY, checkpointZ, false) < 5.0) && onces == 0){ 
    Winner = GetPlayerName(PlayerId());
    console.log("Winner is: " + Winner + "!!!!!!!") ;
    onces = 1;
           // Delete the checkpoints
           DeleteCheckpoint(checkpoint);
           DeleteCheckpoint(checkpoint2);
  }

}

  /*setInterval(() => {
      let [playerX, playerY, playerZ] = GetEntityCoords(PlayerPedId(), true);    
    }, 1000);*/

RegisterCommand('endrace', (source, args, rawCommand) => { //JUST FOR TESTING PAYOUT WILL REMOVE LATER
  let data = {
    playerSrc: GetPlayerServerId(PlayerId()),
    winnings: args[0]
  };
  emitNet('dragrace:racepay', data);
});