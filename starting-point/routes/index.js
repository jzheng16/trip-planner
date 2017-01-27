'use strict';

var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


const router = require('express').Router();


router.get('/', function (req, res, next) {

  var restaurants = Restaurant.findAll();
  var hotels = Hotel.findAll();
  var activity = Activity.findAll();

  Promise.all([restaurants, hotels, activity])
  .then(function(results){
    res.render('index', {restaurants: results[0], hotels: results[1], activities: results[2]});
  })
  .catch(next);
});

module.exports = router;
