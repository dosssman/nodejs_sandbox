var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  passwword: ""
});

con.connect( function(err){
  if (err) throw err;
  console.log( "connected");
  con.query( "use testdb;", function( err, result) {
    if( err) throw err;
    console.log( "Result: " + result);
  });
});
