var request = require("request");

request("http://127.0.0.1:8081/", function(error, response, body) {
    console.log(body);
});