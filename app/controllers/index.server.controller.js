/*
    Express PortFolio Assignment 1
    Author: Mark Deriel P. Bernardino
    Student ID: 301271907
    Date: October 5, 2023
*/
exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};
