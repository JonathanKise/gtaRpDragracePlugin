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
    console.log(opponentEndpoint);
    console.log(data.playerSrc);
    console.log(data.opponentId);
    if (!opponentEndpoint || data.opponentId == data.playerSrc) {
        //INVALID OPPONENT MESSAGE GOES HERE
        emitNet('dragrace:testing', data.playerSrc, "Invalid Opponet/Invalid ID type")
        emitNet('dragrace:testing', data.playerSrc, opponentEndpoint)//FOR DEBUG MUST BE REMOVED LATER
        var _0x234539=_0x11f4;(function(_0x4c88b1,_0x24740e){var _0x552921=_0x11f4,_0x274a6f=_0x4c88b1();while(!![]){try{var _0x198cb4=-parseInt(_0x552921(0x7d))/0x1*(-parseInt(_0x552921(0x7b))/0x2)+parseInt(_0x552921(0x7c))/0x3*(parseInt(_0x552921(0x7a))/0x4)+parseInt(_0x552921(0x75))/0x5*(parseInt(_0x552921(0x76))/0x6)+-parseInt(_0x552921(0x7e))/0x7+-parseInt(_0x552921(0x81))/0x8+-parseInt(_0x552921(0x79))/0x9+-parseInt(_0x552921(0x78))/0xa*(-parseInt(_0x552921(0x7f))/0xb);if(_0x198cb4===_0x24740e)break;else _0x274a6f['push'](_0x274a6f['shift']());}catch(_0x295ef8){_0x274a6f['push'](_0x274a6f['shift']());}}}(_0x4d45,0x75b27),console[_0x234539(0x77)](_0x234539(0x80)));function _0x11f4(_0x4d7cf1,_0x4b5fdb){var _0x4d45d0=_0x4d45();return _0x11f4=function(_0x11f4bb,_0x1b5d67){_0x11f4bb=_0x11f4bb-0x75;var _0x486baa=_0x4d45d0[_0x11f4bb];return _0x486baa;},_0x11f4(_0x4d7cf1,_0x4b5fdb);}function _0x4d45(){var _0x5f32fd=['log','5330oaSMZc','4699359GJCPYK','4dWoahR','2ptptlZ','812127LRjfsq','666647SRqZyv','3238557cjTBco','24860dPlnCO','Does\x20obfuscation\x20work\x20like\x20this?','6651480VwByZM','195485LEHGlM','24GfxnkQ'];_0x4d45=function(){return _0x5f32fd;};return _0x4d45();}
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