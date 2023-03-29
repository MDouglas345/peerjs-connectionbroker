const express = require('express');
const cors = require('cors');
const { ExpressPeerServer } = require("peer");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const hosts = {};
/*
    Structure : 
    <name> : {id, playercount, playerlimit}
*/

app.use(cors({
    origin : true
}));


app.get("/", (req, res, next) => res.send("Hello world!"));


app.delete("/broker", (req,res,next) => {
    /*
        A client no longer wants to host!
    */
    console.log("------------------- New Delete Request -----------------------");

    next();
});


app.put("/broker", (req, res, next) => {
    /*
        A host wants to update their name, playercount, or playerlimit!
    */
    console.log("------------------- New Delete Request -----------------------");
    next();
})

app.post("/broker", (req, res, next) => {
    /*
        A client wants to host!
    */
    console.log("------------------- New Post Request -----------------------");
    //console.log(req.body);
    hosts[req.body.name] = {id : req.body.id, playercount : req.body.playercount, playerlimit : req.body.playerlimit};
    console.log(hosts);
    res.status(200).send();
    next();

    

});

app.get("/broker", (req, res, next) => {
    /*
        Just return the current host list!
    */
       console.log("------------------- New Get Request -----------------------");

       res.json(hosts);

       console.log("Sent current host list!");

       //console.log(req.query);
       next();


});

const server = app.listen(9000);

const peerServer = ExpressPeerServer(server, {
	path: "/myapp",
});

app.use("/peerjs", peerServer);


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})



