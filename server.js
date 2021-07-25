const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// to seed the database with some example data if desired
// const seedAll = require('./seeds/index-seeds');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//cookie session
const sess = {
  secret: 'Super secret secret',
  cookie: {
    //time until session is destroyed = 5 minutes, 
    //which was for testing, but can be changed here
    maxAge: 60 * 1000 * 5
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//express using database, cookies
app.use(session(sess));

//helper functions
const helpers = require('./utils/helpers');

//handlebars using helper functions
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));


//run a new mysql with source db/schema.sql then exit, 
//un-comment below ~app.use(seedAll);~ to use on `npm start` then re-comment out,
// `npm start` and server now has that data seeded to the tech_blog_db

// app.use(seedAll);
  


//database and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
