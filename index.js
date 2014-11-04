/* jshint node:true */
"use strict";
var statics = require('node-static');
var http = require('http');

var staticServer = new statics.Server('./public', {cache: false});
http.createServer(function (request, response) {

    request.addListener('end', function () {
        staticServer.serve(request, response);
    }).resume();
}).listen(parseInt(process.env.PORT) || 8000);
