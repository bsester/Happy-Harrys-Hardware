const express = require("express");
const feedRoutes  = require("./routes/feed");
const bodyParser = require("body-parser");

const app = express();

// Any route starting w/ /feed will goto feedRoutes
//    e.g., GET /feed/posts

//app.use(bodyParser.urlencoded()) // this is for www encoded data (e.g., a form)

app.use( bodyParser.json()); // for JSON input data

// The * opens up for all domains ... BUT could CSV specify allowed domains
//               e.g., localhostL3000, localhost:3001
app.use( (req, res, next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Can set specific methods allowed (Can say '*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // Again can use wild card (*)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use( "/feed", feedRoutes );

let port = 8089;
console.log( `listen on http://localhost:${port}`);
app.listen( port )


