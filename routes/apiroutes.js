// dependencies
const fs = require("fs");

// uuid package
const { v4: uuidv4 } = require('uuid');

// routing
module.exports - function (app){


// api get request
app.get("/api/notes", (req, res) => {
    console.log("Grabbing notes");

    // read db.json
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        console.log("GET Notes: " = JSON.stringify(data));

    // send response
    res.json(data);

})

// api post request
app.post("./api/notes", (req, res) => {
    
    // new note
    const currentNote = request.body;
        console.log("POST - Current Note : " + JSON.stringify(currentNote));
    
    // assign unique id
    currentNote.id = uuidv4();
    // read db.json
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    // push current note - db.json
    data.push(currentNote);
    // write to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(data));

    // send response
    res.json(data);

});
// bonus api delete request ?!?!?!!
    // fetch id
    // read db.json
    // filter out note to delete
    // write to db.json
    // send response

}




// - GET /notes should return the notes.html file.
// - GET * should return the index.html file.
// - GET /api/notes should read the db.json file and return all saved notes as JSON.
// - POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
