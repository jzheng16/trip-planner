'use strict';
const Sequelize = require('sequelize');
const db = require('./db');

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 4
    }
  }
})



module.exports = Restaurant;
