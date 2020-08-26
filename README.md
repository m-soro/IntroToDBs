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
    var catSchema = new Schema({
        name: String,
        age: Number,
        temperament: String
    });
    ```

    - save it to a variable after compiling it to a *model*, we can just use the said variable to CRUD:
    `var Cat = mongoose.model('Cat', catSchema);` *not that variable is the single version of any given name and Capitalize the first letter*
    - you can then use `Cat.create`, `Cat.find`, etc...

    - to add a new cat:
    ```
    var george = new Cat({
      name: 'George',
      age: 11,
      temperament: 'Grouchy'
    });
    ```

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

    - results in:
    ```
    We just saved a cat to the DB:
{
  _id: 5f42cdb340fc55340e9ac815,
  name: 'George',
  age: 11,
  temperament: 'Grouchy',
  __v: 0
}
    ```
    - the variable `george` doesnt really matter, we're just using this as a javascript variable to communicate to our database `cat` is what really coming from the database.

    - to check:
      - go to directory run in terminal `mongo`
      - `show dbs`
      - `use <FileYouHadSavedOnMongoose.connect>`
      - `show collections`
      - `cats` is automatically pluralized!
