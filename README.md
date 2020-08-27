# Intro to Mongoose      

  * What is Mongoose?
    - ODM object data mapper allows us write javascript file that interacts with database.

  * Why are we using it?

  * Interact with mongodb with mongoose
    - to connect mongodb to mongoose:
    ```
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/cat_app', {useNewUrlParser: true, useUnifiedTopology: true});
    var Schema = mongoose.Schema;
    ```

    - to define a pattern or schema to our database:
    ```
    var catSchema = new Schema({
        name: String,
        age: Number,
        temperament: String
    });

    var Cat = mongoose.model('Cat', catSchema);
    ```

    - save it to a variable after compiling it to a *model*, we can just use the said variable to CRUD:
    `var Cat = mongoose.model('Cat', catSchema);` *note that variable is the single version of any given name and Capitalize the first letter*
    - this returns an object that has a bunch of method like `create`, `find` etc,
    - you can then use `Cat.create`, `Cat.find`, etc...

    - to add/create a new cat:
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
    - the variable `george` doesn't really matter, we're just using this as a javascript variable to communicate to our database `cat` is what really coming from the database.

    - to check:
      - go to directory run in terminal `mongo`
      - `show dbs`
      - `use <FileYouHadSavedOnMongoose.connect>`
      - `show collections`
      - `cats` is automatically pluralized!

    - to retrieve data from db:
      - use the `find` method on `Cat` which is the *model*, `var Cat = mongoose.model('Cat', catSchema);`.
      - passing an empty object retrieves all of the cats and the call back function parameters can be named as how we choose to.
      - passing in a callback function because it may take some time or not even be execute.
      ```
      Cat.find({}, function(err, cats){
        if(err){
          console.log('Oh no, error!');
          console.log(err);
        } else {
          console.log('Here are all the cats');
          console.log(cats);
        }
      });
      ```
      - running this code will retrieve all of the cats!

    - to create a new item in db:
      - use the `create` method, which is `new` and `save` all at once!.
