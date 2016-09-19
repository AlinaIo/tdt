/**
 * Created by tdt on 19.09.2016.
 */
var server = require('../server');

describe('server', function () {
    before(function () {
        server.listen(8000);
    });

    after(function () {
        server.close();
    });
});


var assert = require('assert'),
    http = require('http');

describe('/', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:8000', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});
// var chai = require('chai');
// var expect = chai.expect; // we are using the "expect" style of Chai
// var TestForm = require('./server.js');
//
// describe('TestForm', function() {
//     it('getSubtotal() should return 0 if no items are passed in', function() {
//         var testForm = new TestForm([]);
//         expect(testForm.getAllResponseHeaders()).to.notnull;
//     });
// });