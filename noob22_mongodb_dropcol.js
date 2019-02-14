var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect( url, function( err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // dbo.collection( "customers").drop( function( err, res) {
  //   if (err) throw err;
  //   if ( res) console.log( "Collection deleted.");
  //   db.close();
  // });

  dbo.dropCollection( "customers", function( err, res) {
    if  (err) throw err;
    if ( res) console.log( "Collection wiped");
    db.close();
  });
});
