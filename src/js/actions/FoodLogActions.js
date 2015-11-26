var AppDispatcher = require('../dispatcher/AppDispatcher');
var FoodLogConstants = require('../constants/FoodLogConstants');

// Define action methods
var FoodLogActions = {

  // Receive inital food data
  getFood: function(data) {
    AppDispatcher.handleAction({
      actionType: FoodLogConstants.GET_FOOD,
      data: data
    })
  },

  // Set currently selected food
  selectFood: function(index) {
    AppDispatcher.handleAction({
      actionType: FoodLogConstants.SELECT_FOOD,
      data: index
    })
  },

  // Log food
  addToLog: function(data) {
    AppDispatcher.handleAction({
      actionType: FoodLogConstants.ADD_TO_LOG,
      data:data
    })
  },

  // Remove food from log
  removeFromLog: function(index) {
    AppDispatcher.handleAction({
      actionType: FoodLogConstants.FOOD_REMOVE,
      data: index
    })
  },


};

module.exports = FoodLogActions;
