const express = require('express');
const bodyParser= require('body-parser')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const helper = require('./lib/helpers');
app.use('/users', require('./routes/users.js'));
app.use('/contacts', require("./routes/contacts.js"))
const db = require('./database');

db.initDbConnection().then(function () {
  app.listen(8081, function() {
      console.log('listening on 8081')
    });
}).catch(function (err){
    console.error('Epic fail during db init', err);
    process.exit(1);
});






