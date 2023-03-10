const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 9000, path: "/myapp" });

const clients = {};
const hosts = {};


peerServer.on('connection', (client) =>{
    console.log("wow");
});

//console.log(peerServer);