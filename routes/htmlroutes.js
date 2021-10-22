// dependencies
const path = require("path");
const app = require("../../../projects/express/28-Stu_Mini-Project/Develop/routes");

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
 