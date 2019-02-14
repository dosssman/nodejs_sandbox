var mongo = require("mongodb");

var mongoclient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoclient.connect( url, function( err, db) {
  if (err) throw err;
  console.log( "Database created!");
  db.close();
});
