var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect( url, function( err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // Update an elemet
  // var query = { address: "Shimizu Rami"};
  // var new_values = { $set: { name: "Zalagul",
  //   address: "Kosutoko 123"}};
  //
  // dbo.collection( "customers").updateOne( query,
  //     new_values, function( err, res) {
  //     if (err) throw err;
  //     console.log( res);
  //     db.close();
  // });

  // Update specific fields
  var query = { address: "Valley 345"};
  var new_values = { $set: { address: "Canyon 123"}};
  dbo.collections( "customers").updateOne( query, new_values,
    function (err, res) {
      if (err) throw err;
      console.log( res);
      db.close();
    });
});
