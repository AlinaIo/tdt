/**
 * Created by tdt on 19.09.2016.
 */
var server = require('./server');

describe('server', function () {
    before(function () {
        server.listen(1185);
    });

    after(function () {
        server.close();
    });
});


var assert = require('assert'),
    http = require('http');

describe('/', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:1185', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});
