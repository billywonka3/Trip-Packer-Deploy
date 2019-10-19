require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');
const passport     = require('passport');
const session      = require('express-session');

require('./config/passport-config');


mongoose.Promise = Promise;
mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  // .connect('mongodb://localhost/express-backend', {useNewUrlParser: true})
  .then(() => {
    console.log(`Connected to Mongo! `)
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(session({
  secret:"some secret goes here",
  resave: true,
  saveUninitialized: true
}));

// default value for title local
// app.locals.title = 'Trip-Packer : Take the First Step on a new Journey';

app.use(passport.initialize());
app.use(passport.session());

// Set up a whitelist and check against it:
var whitelist = ['https://trip-packer.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors({
  corsOptions,
  credentials: true,
  origin: 
  [
    'http://localhost:3000', 
    'https://trip-packer.herokuapp.com'
  ]
}));



// ================ ROUTES ==================
const userRoutes = require('./routes/userRoutes');
app.use('/api/auth', userRoutes);

// const signupRoutes = require('./routes/userRoutes');
// app.use('/api/signup', userRoutes);

// const loginRoutes = require('./routes/userRoutes');
// app.use('/api/login', userRoutes);

const tripRoutes = require('./routes/tripRoutes');
app.use('/api/trips', tripRoutes);

const clothingRoutes = require('./routes/clothingRoutes');
app.use('/api/clothing', clothingRoutes);

const toiletriesRoutes = require('./routes/toiletriesRoutes');
app.use('/api/toiletries', toiletriesRoutes);

const electronicsRoutes = require('./routes/electronicsRoutes');
app.use('/api/electronics', electronicsRoutes);

const specialsRoutes = require('./routes/specialsRoutes');
app.use('/api/specials', specialsRoutes);

const householdRoutes = require('./routes/householdRoutes');
app.use('/api/household', householdRoutes);

// ==========================================

app.use ((req, res, next) => {
  res.sendFile(_dirname + "/public/index.html")
});

module.exports = app;

