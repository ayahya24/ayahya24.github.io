"use strict";

var express = require('express');
var bodyparser = require('body-parser');
var fs = require("fs"); //File system
const { response } = require('express');
var app = express();
const { Console } = require('console');

const dir = '**/AR-206/'

app.get('/', (req, res)=>{
    var homepage = fs.readFileSync(dir+'pulley.html').toString();
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(homepage);
    res.end();
});

app.get('/*.js', (req, res)=>{
    /*var js = fs.readFileSync(dir+req.url).toString();
    res.writeHead(200, {'Content-Type':'text/javascript'});
    res.write(js);
    res.end();*/
    if(req.url[0]=='/') {
        res.sendFile(dir+req.url.slice(1, req.url.length));
        console.log(dir+req.url.slice(1, req.url.length));
    } else {
        res.sendFile(dir+req.url);
        console.log(dir+req.url);
    }
});

app.get('*.patt', (req, res)=>{
    console.log(req.url);
    res.sendFile(dir+req.url);
});

app.get('*.dat', (req, res)=>{
    console.log(req.url);
    res.sendFile(dir+req.url);
});

app.get('*.jpg', (req, res)=>{
    console.log(req.url);
    res.sendFile(dir+req.url);
});

app.get('*.png', (req, res)=>{
    console.log(req.url);
    res.sendFile(dir+req.url);
});

app.get('*.map', (req, res)=>{
    console.log(req.url);
    res.sendFile(dir+req.url);
});

app.get('*.css', (req, res)=>{
    console.log(req.url);
    res.sendFile(dir+req.url);
});

app.get('*.obj', (req, res)=>{
    console.log(req.url);
    res.sendFile(dir+req.url);
});


var server = app.listen(8080, '127.0.0.1');

console.log("localhost:8080");