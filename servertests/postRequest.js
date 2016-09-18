/**
 * Created by tdt on 18.09.2016.
 */
var request = require("request");

request({
    uri: "http://127.0.0.1:8081/",
    method: "POST",
    form: {
        username: "Bob"
    }
}, function(error, response, body) {
    console.log(body);
});