// require dependencies 
const express = require("express");

const path = require("path");

// initialize port and express app
// set port
const PORT = process.env.PORT || 3001;
// initialize express
const app = express();

// TODO: Implement middleware for the parsing of JSON data
// TODO: Implement middleware for parsing of URL encoded data
// middleware to serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// routers
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// Tell express to start listening!
app.listen(PORT, function () {
  console.log(`Express server listening on port http://localhost:${PORT}!`)
});


// - GET /notes should return the notes.html file.
// - GET * should return the index.html file.
// - GET /api/notes should read the db.json file and return all saved notes as JSON.
// - POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
