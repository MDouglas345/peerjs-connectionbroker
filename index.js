const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

const clients = {};
hosts = {};


app.get('/reset', (req,res) => {
    hosts = {};
    res.send("resetted hosts");
});


app.get('/', (req, res) => {
    /*
        if host is true, then a parameter name should be present
    */

    //res.send(JSON.stringify(req.query));

    console.log("------------------------------------------------------");

    console.log(req.query.host);

    if (req.query.host == "false" || req.query.host == null){
        console.log("HOST LIST");
        console.log(JSON.stringify(hosts));
        res.send(JSON.stringify(hosts));
        console.log("------------------------------------------------------");
        return;
    }

    if (req.query.name === null){
        res.send("REQUEST ERROR: No host name provided");
    }

    if (req.query.name in hosts){
        res.send("REQUEST ERROR: Host name already taken");
    }

    hosts[req.query.name] = req.query.id;

    

    console.log("------------------------------------------------------");

    
})


app.listen(process.env.PORT || 3000, () => {
  
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