// Impors
const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');
// SETTINGS
app.set('port', process.env.PORT || 3000);

//MIDDLEWARE *-*
app.use(morgan('dev'));
app.use(express.json());

//ROUTES
app.use('/api/heroes',require('./Routes/heroes.route'))

//START
app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});
