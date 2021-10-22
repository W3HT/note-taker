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
        console.log("GET Notes: " + JSON.stringify(data));

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
app.delete("/api/notes/:id", (res, req) => {

    // fetch id
    let noteIdNum = request.params.id.toString();
        console.log(`DELETE - NoteId: ${noteIdNum}` );
    
    // read db.json
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    // filter out note to delete
    const dataNew = data.filter( note => note.id.toString() !== noteIdNum );

    // write to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(dataNew));
        console.log(`Note id: ${noteIdNum}, deleted successfully.` )
    // send response
    res.json(dataNew);


});
   

};
