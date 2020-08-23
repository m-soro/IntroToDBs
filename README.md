# Intro to Mongoose      

  * What is Mongoose?
    - helps us interact with MongoDB inside the javascript file.
  * Why are we using it?

  * Interact with mongodb with mongoose
    - to connect mongodb to mongoose:
    ```
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/cat_app', {useNewUrlParser: true, useUnifiedTopology: true});
    var Schema = mongoose.Schema;
    ```

    - to define a pattern to our database:
    ```
    var catSchema = new mongoose.catSchema({
        name: String,
        age: Number,
        temperament: String
    });
    ```

    - save it to a variable after compiling it to a *model*, we can just use the said variable to CRUD:
    `var Cat = mongoose.model('Cat', catSchema);` *not that variable is the single version of any given name and Capitalize the first letter*
    - you can then use `Cat.create`, `Cat.find`, etc...

    - to save to a database, with a callback function
    ```
    george.save(function(err, cat){
      if(err){
        console.log('something went wrong!');
      } else {
        console.log('We just saved a cat to the DB:');
        console.log(cat);
      }
    });
    ```
