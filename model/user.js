var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema ({
  username: { type: String, required: true }
  // , facebookID: String
  // , twitterID: String,
  // 	favorites = [ { type: ref } ]
});

// var favoritesSchema = new Schema ({
// 	recipes: [{
// 		cuisine: { type: String },
// 	}],
// })

module.exports = mongoose.model('User', userSchema)
