var User = require('../model/user.js');
var Recipe = require('../model/recipe.js');

var exports = module.exports = {};

exports.loginUser = function(req, res) {
  return res.status(200).json(req.user)
};

exports.read = function(req, res){
  Recipe.find({}, function(err, result){
    console.log('read stuff')
    if(err) return res.status(500).json(err)
    return res.json(result);
  })
}

exports.createUser = function(req, res){
  var newUser = new User(req.body);
  newUser.save(function(err, user){
    console.log('req.body', req.body)
    if(err) return res.status(500).json(err)
    return res.json(user);
  })
}

exports.get = function(req, res){
  User.find({}, function(err, result){
    console.log('find some crap')
    if(err) return res.status(500).json(err)
    return res.json(result);
  })
}

exports.put = function(req, res){
  User.findByIdAndUpdate(req.params.userid, req.body, function(err, result){
    console.log('Updating crap', req.body)
    if(err) return res.status(500).json(err)
    return res.json(result);
  })
}

exports.delete = function(req, res){
  User.findByIdAndRemove(req.params.userid, function(err, result){
    console.log('Removing crap', req.body)
    if(err) return res.status(500).json(err)
    return res.json(result)
  })
}
