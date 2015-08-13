var User = require('../model/user.js');

var exports = module.exports = {};

exports.loginUser = function(req, res) {
  return res.status(200).json(req.user);
};

exports.createUser = function(req, res){
  var newUser = new User(req.body);
  newUser.save(function(err, user){
    console.log('req.body', req.body);
    if(err) return res.status(500).json(err);
    return res.json(user);
  });
};

exports.addToUserFavs = function(req, res){
  console.log(req.body);
  User.findByIdAndUpdate(req.user, {$push: {favorites: req.body.recId}}, {new: true}, function(err, data){
    if(!err) return res.status(200).json(data);
    console.log(err);
  });
};

exports.delete = function(req, res){
  User.findByIdAndRemove(req.params.userid, function(err, result){
    console.log('Removing crap', req.body);
    if(err) return res.status(500).json(err);
    return res.json(result);
  });
};

exports.getUserFavs = function(req, res){
  User.findById(req.user, function(err, result){
    if(err) return res.status(500).json(err);
    return res.json(result);
  });
};
