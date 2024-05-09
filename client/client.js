
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
  /* const [playerX, playerY, playerZ] = GetEntityCoords(PlayerPedId(), false);
   console.log(`${playerX}, ${playerY}, ${playerZ}`);

   let checkpoint = CreateCheckpoint(1, playerPos[0], playerPos[1], playerPos[2], 0, 0, 0, 5, 255, 0, 0, 200, 0);
 */
}, false);