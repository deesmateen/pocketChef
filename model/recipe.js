var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recipeSchema = new Schema ({
  Name: { type: String },
  Cuisine: String,
  CookingMethod: String
})

module.exports = mongoose.model('Recipe', recipeSchema);
