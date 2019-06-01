'use strict';

var path = __dirname;
var pointAccess = path + '/webapp/index.html';
var uri = "http://localhost:";
var port = 3333;
var routeIndex = './webapp/index.html';
var routeWebapp = "./webapp";
var sourceJs = [
  './webapp/app/**/*.js'
];
var sourceCss = [
  './webapp/css/**/*.css'
];
var sources = sourceJs.concat(sourceCss);

module.exports = {
    path,
    pointAccess,
    port,
    routeIndex,
    routeWebapp,
    sources,
    uri
};
