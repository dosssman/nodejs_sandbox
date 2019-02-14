var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect( url, function( err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // Return the first entry ? What about other rows ? Find with specific crite ?
  // dbo.collection("customers").findOne( {}, function( err, res) {
  //   if (err) throw err;
  //   console.log( res);
  //   db.close();
  // });

  // Find all
  // dbo.collection("customers").find( {}).toArray( function (err, res) {
  //   if (err) throw err;
  //   console.log( res);
  //   db.close();
  // });

  // Find some with projection: Field exclusions
  // dbo.collection( "customers").find({}, { projection: {
  //   _id: 0,
  //   name: 1,
  //   address: 1
  // }}).toArray( function( err, result) {
  //   if (err) throw err;
  //   console.log( result);
  //   db.close();
  // });

  // Misuse of projection's exclusions
  // dbo.collection( "customers").find( {}, { projection: {
  //   name: 1, address: 0}}).toArray( function( err, res) {
  //     if (err) throw err;
  //     console.log( res);
  //     db.close();
  //   });

  // OOP access to result
  dbo.collection( "customers").find({}, { projection: {
    _id: 0,
    name: 1,
    address: 1
  }}).toArray( function( err, result) {
    if (err) throw err;
    console.log( result[2].address);
    db.close();
  });
});
