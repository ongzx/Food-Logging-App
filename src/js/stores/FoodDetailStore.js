var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FoodLogConstants = require('../constants/FoodLogConstants');
var _ = require('lodash');

var _foodDetail = {};

function loadFoodDetail(data) {
  _foodDetail = data[0];
}
