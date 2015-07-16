var express = require('express')
    , mongoose = require('mongoose')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = express()
    , passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy
    , bcrypt = require('bcrypt')
    , session = require('express-session')
    , port = 2020;

app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'Node Auth' }));
app.use(passport.initialize());
app.use(passport.session());

var User = require('./model/user.js')

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user)
  });
});

var mongoUri = 'mongodb://localhost/pocket-chef';

mongoose.connect(mongoUri);

var userCtrl = require('./controllers/usercontroller.js');
app.use(express.static(__dirname + '/public'));


// passport.use(new LocalStrategy(function(username, password, done){
//   User.findOne({ email: email }, function(err, user) {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }
//     if (!user.comparePassword(password)) {
//       return done(null, false, { message: 'Incorrect password.' });
//     }
//     return done(null, user)
//   });
//   }
// ));

// app.post('api/login', passport.authenticate('local', {
//   failureRedirect: '/login',
//   successRedirect: '/home'
// }), userCtrl.login);

// app.get('/api/getnewrecipe', userCtrl.read);
// app.post('/api/createnewrecipe', userCtrl.create)
//
// app.get('/api/user/find', userCtrl.get);
app.post('/api/user/create', userCtrl.createUser);
// app.put('/api/user/update/:userid', userCtrl.put);
// app.delete('/api/user/remove/:userid', userCtrl.delete);

app.listen(port, function() {
  console.log('Boo ya SUCKA: ', port);
});


// var mongoUri = 'localhost:27017/pocket-chef';
