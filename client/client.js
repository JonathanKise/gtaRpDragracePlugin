
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

   const [playerX, playerY, playerZ] = GetEntityCoords(PlayerPedId(), false);

}, false);

