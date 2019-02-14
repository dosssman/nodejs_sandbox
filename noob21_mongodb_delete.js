var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect( url, function( err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // DeleteOne
  // var delquery = { address: "Mountain 21"};
  // dbo.collection( "customers").deleteOne( delquery, function( err, res) {
  //   if (err) throw err;
  //   console.log( "1 document deleted");
  //   console.log( res);
  //   db.close();
  // });

  // DeleteMany
  var del_query = { address: /^O/};
  dbo.collection( "customers").deleteMany( del_query, function( err, obj) {
    if ( err) throw err;
    console.log( obj.result.n + " document(s) deleted");
    console.log( obj);
    db.close();
  });
});
