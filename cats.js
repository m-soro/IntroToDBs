var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', {useNewUrlParser: true, useUnifiedTopology: true});
var Schema = mongoose.Schema;

var catSchema = new Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

// adding a new cat to db

var george = new Cat({
  name: 'Mrs. Norris',
  age: 7,
  temperament: 'Evil'
});

// save and define a call back function
george.save(function(err, cat){
  if(err){
    console.log('something went wrong!');
  } else {
    console.log('We just saved a cat to the DB:');
    console.log(cat);
  }
});

// retrieve all cats from db and console.log each one.

//
