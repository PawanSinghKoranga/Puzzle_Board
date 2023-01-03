const WebSocket = require("ws");
// const fs = require('fs')

const wss = new WebSocket.Server({port:8082});

var jsonData;

wss.on("connection", ws => {
    ws.on("message",message=>{
        jsonData = JSON.parse(message);
        console.log(jsonData);
    });

    ws.on("close",function(){
        console.log("I lost a client");
    });

    ws.send(JSON.stringify(jsonData));
    
    console.log("one more client connected");
});