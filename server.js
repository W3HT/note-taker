// require dependencies
const express = require("express");
const fs = require("fs");
const { request } = require("http");
// const apiRoutes = require("./routes/apiroutes");
// const htmlRoutes = require("./routes/htmlroutes");

const path = require("path");
const { v4: uuidv4 } = require("uuid");
// initialize port and express app
// set port
const PORT = process.env.PORT || 3001;
// initialize express
const app = express();
let noteData = require("./db/db.json");
// TODO: Implement middleware for the parsing of JSON data
// TODO: Implement middleware for parsing of URL encoded data
// middleware to serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routers

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// index redirect
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/notes", (req, res) => {
  console.info("GET /api/notes");
  res.status(200).json(noteData);
});

app.get("/api/notes", (req, res) => res.json(noteData));

app.post("/api/notes", (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  const myObject = JSON.parse(data);

  const newData = req.body;
  newData.id = uuidv4();
    console.log(newData.id);
  myObject.push(newData);

  var newData2 = JSON.stringify(myObject);
  fs.writeFile("./db/db.json", newData2, (err) => {
    //error
    if (err) throw err;
      console.log("Note Added");
});

app.delete('api/notes/:id', (req, res)=> {
  const noteIdNum = request.params.id.toString();
    console.log(`Delete - NoteId: ${noteIdNum}`)
  let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  const dataNew = data.filter( note => note.id.toString() !== noteIdNum );
  
  fs.writeFileSync('./db/db.json', JSON.stringify(dataNew));
  
});


});


app.listen(PORT, function () {
  console.log(`Express server listening on port http://localhost:${PORT}!`);
});

// - GET /notes should return the notes.html file.
// - GET * should return the index.html file.
// - GET /api/notes should read the db.json file and return all saved notes as JSON.
// - POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
