var express = require('express')
    , mongoose = require('mongoose')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = express()
    , passport = require('passport')
    , flash = require('connect-flash')
    , morgan = require('morgan')
    , cookieParser = require('cookie-parser')
    , session = require('express-session')
    , port = 2020;

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

// require('./config/passport')(passport);

var usercontroller = require('./controllers/usercontroller.js');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'Node Auth' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);

app.get('/api/getnewrecipe', usercontroller.read);
app.post('/api/createnewrecipe', usercontroller.create)

app.get('/api/finduser', usercontroller.get);
app.post('/api/createuser', usercontroller.post);
app.put('/api/updateuser/:userid', usercontroller.put);
app.delete('/api/removeuser/:userid', usercontroller.delete);

app.listen(port, function() {
  console.log('Boo ya SUCKA: ', port);
});

var mongoUri = 'mongodb://localhost/pocket-chef';
mongoose.connect(mongoUri);

// var mongoUri = 'localhost:27017/pocket-chef';
