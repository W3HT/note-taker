// dependencies
const path = require("path");

// routers
module.exports = app => {

    // html get notes
    app.get('/api/notes', function (res, req) {
        res.sendFile(path.join(__dirname, './public/notes.html'));
    });

    // /
    app.get('/', function (res, req) {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });
    // * 
    app.get('*', function (res, req) {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });

};
 