const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 9000 });

const clients = {};
const hosts = {};


peerServer.on('connection', (client) =>{
    clients[client.id] = client;
    console.log(clients);
});


peerServer.post('/host', (req, res) => {
    
});

//console.log(peerServer);