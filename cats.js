var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', {useNewUrlParser: true, useUnifiedTopology: true});

var catSchema = new mongoose.catSchema({
    name: String,
    age: Number,
    temperament: String
});

var Car = mongoose.model('Cat', catSchema);

// adding a new cat to db

var george = new Cat({
  name: 'George',
  age: 11,
  temperament: 'Grouchy'
});

george.save(function(err, cat){
  if(err){
    console.log('something went wrong!');
  } else {
    console.log('We just saved a cat to out DB:');
    console.log(cat);
  }
});

// retrieve all cats from db and console.log each one.

//
