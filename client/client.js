
RegisterCommand('dragrace', (source, args, rawCommand) => {
  
    console.log("Drag Race Event Started");
    console.log("Source: " + source );
    console.log("Name: " + args[0]);  
    console.log("Raw Command: " + rawCommand );
   // let player = GetPlayerName();
   // let playerPos = GetEntityCoords(player, false);
   let playerSrc = GetPlayerServerId(PlayerId());
 //  let playerIdentifier = GetPlayerIdentifier(playerSrc, 0);
   console.log(playerSrc+ " is the player source");

   const [playerX, playerY, playerZ] = GetEntityCoords(PlayerPedId(), true);

    console.log(playerX + " is the player X");
    console.log(playerY + " is the player Y");
    console.log(playerZ + " is the player Z");

    let playerHeading = GetEntityHeading(PlayerPedId());
    console.log(playerHeading + " is the player's heading");
    let [checkpointX, checkpointY, checkpointZ] = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 402, 0.0);
    let checkpoint = CreateCheckpoint (1, playerX, playerY, playerZ-1, playerX, playerY, playerZ, 5.0, 255, 0, 0, 200, 0);
    let checkpoint2 = CreateCheckpoint (1, checkpointX, checkpointY, checkpointZ-1, playerX, playerY, playerZ, 5.0, 255, 0, 0, 200, 0);
}, false);

