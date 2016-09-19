/**
 * Created by tdt on 17.09.2016.
 */
var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');

// var server = http.createServer(function (req, res) {
//     displayForm(res);
// });
//
// function displayForm(res) {
//     fs.readFile('public/login.html', function (err, data) {
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//             'Content-Length': data.length
//         });
//         res.write(data);
//         res.end();
//     });
// }

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }

});

function displayForm(res, req) {


    fs.readFile('public/login.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Content-Length': data.length
            });
            res.write(data);
            // res.end();
        });

    fs.readFile(__dirname + '/login.js', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
         // res.end();
        });

    fs.readFile(__dirname + '/login.css', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });


}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
}


server.listen(8081);
console.log("Server running at http://127.0.0.1:8081/");