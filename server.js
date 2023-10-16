/*
    Express PortFolio Assignment 1
    Author: Mark Deriel P. Bernardino
    Student ID: 301271907
    Date: October 5, 2023
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
