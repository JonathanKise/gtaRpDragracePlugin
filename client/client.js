
RegisterCommand('dragrace', (source, args, rawCommand) => {
    let name = args[0];
    console.log("Drag Race Event Started");
    console.log("Player Name: " + name);
    
    let player = GetPlayerId();
    let playerPos = GetEntityCoords(player, false);

    let checkpoint = CreateCheckpoint(1, playerPos.x, playerPos.y, playerPos.z, 0, 0, 0, 5, 255, 0, 0, 200, 0);

}, false);