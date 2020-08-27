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

// var george = new Cat({
//   name: 'Mrs. Norris',
//   age: 7,
//   temperament: 'Evil'
// });

// save and define a call back function
// george.save(function(err, cat){
//   if(err){
//     console.log('something went wrong!');
//   } else {
//     console.log('We just saved a cat to the DB:');
//     console.log(cat);
//   }
// });

// retrieve all cats from db and console.log each one.

Cat.find({}, function(err, cats){
  if(err){
    console.log('Oh no, error!');
    console.log(err);
  } else {
    console.log('Here are all the cats');
    console.log(cats);
  }
});

Cat.create({
  name: 'Snow White',
  age: 15,
  temperament: 'Bland',
}, function(err, newCat){
  if(err){
    console.log('Oops, you hit an error!');
    console.log(err);
  } else {
    console.log('Here is the new cat!');
    console.log(newCat);
  }
});
