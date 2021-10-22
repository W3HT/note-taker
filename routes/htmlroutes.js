// dependencies
const path = require("path");

// routers
module.exports = Function (app) {

    // html get notes
    app.get('/notes', function (res, req) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // /
    app.get('/', function (res, req) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // * 
    app.get('*', function (res, req) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

};
 