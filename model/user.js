var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  email: { type: String, required: true },
  password: { type: String, required: true },
  favorites: [{
    type: String
  }]

});

//since this is pre it goes first and makes its a hash
userSchema.pre('save', function(next) {
  var user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);
      else {
        user.password = hash;
        next();
      }
    })
  })
})

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema)
