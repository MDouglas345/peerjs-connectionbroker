const express = require('express');

const app = express();
const port = 9000;


app.get('/', (req, res) => {
  res.send('Hello World!')

  console.log(req);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/*
const { PeerServer } = require("peer");

const peerServer = PeerServer({
     port: 9000, 
     path : "/broker",
    });

const clients = {};
const hosts = {};


peerServer.on('connection', (client) =>{
    clients[client.id] = client;
    console.log(clients);
    client.send("successful return");
});


peerServer.post('/host', (req, res) => {
    
});

//console.log(peerServer);


*/