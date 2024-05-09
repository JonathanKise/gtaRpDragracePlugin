// Register a command 'sayhello' that takes one argument: a name
RegisterCommand('sayhello', (source, args, rawCommand) => {
    // The args array contains the arguments the player typed after the command
    // args[0] is the first argument, args[1] is the second argument, etc.
    let name = args[0];
    console.log(`Hello, ${name}!` + "TETSING THE BS STUFF");
    // Send a message to the player
    emitNet('chat:addMessage', source, {
        args: [`Hello, ${name}!`]
    });
}, false);