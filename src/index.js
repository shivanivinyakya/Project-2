const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Projectblog1:Roomno20@cluster0.vl9g6.mongodb.net/jainshivani02-DB?authSource=admin&replicaSet=atlas-fm8m4t-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});


