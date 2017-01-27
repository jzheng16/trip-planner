'use strict';

const db = require('./db');

const Hotel = require('./hotel');
const Activity = require('./activity');
const Place = require('./place');
const Restaurant = require('./restaurant');

// require all the models
Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);


module.exports = db;
