/*
    Express PortFolio Assignment 1
    Author: Mark Deriel P. Bernardino
    Student ID: 301271907
    Date: October 5, 2023
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/Project', function(req, res, next) {
  res.render('Project', { title: 'Project' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
