var express = require("express"),
    fs = require("fs"),
    http=require("http");
var app=express();

//console.log("hi");
fs.readFile("./index.html", function (err, html) {
	console.log("Server is running at 8024");
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8024);
    
    });
	
fs.readFile("./Gateway.js", function (err, html) {
	console.log("Server is running at 8025");
           
    http.createServer(function(request, response) {  
        response.writeHead(200, {"Content-Type": "javaScript/html"});  
        //response.write(JavaScript);  
        response.end();  
    }).listen(8025);
    
    });
	