var User = require('../model/user.js');
var Recipe = require('../model/recipe.js');

var exports = module.exports = {};

exports.read = function(req, res){
  Recipe.find({}, function(err, result){
    console.log('read stuff')
    if(err) return res.status(500).json(err)
    return res.json(result);
  })
}

exports.create = function(req, res){
  var newRecipe = new Recipe(req.body.recipe[0]);
  newRecipe.save(function(err, result){
    console.log('req.body.recipe', req.body.recipe)
    if(err) return res.status(500).json(err)
    return res.json(result);
  })
}

exports.get = function(req, res){
  User.find({}, function(err, result){
    console.log('find some crap')
    if(err) return res.status(500).json(err)
    return res.json(result);
  })
}

exports.post = function(req, res){
  var newUser = new User(req.body);
  newUser.save(function(err, result){
      console.log('create some crap')
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
