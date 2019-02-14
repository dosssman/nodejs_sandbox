var http = require( "http");
var fs = require( "fs");

http.createServer( function( req, res) {

  fs.appendFile( "file_append.txt", "Well content appended ?", function (err){
    if (err) throw err;
    console.log( "Saved");
  });

  fs.readFile( "file_append.txt", function( err, data) {
    res.writeHead( 200, {"Content-Type": "text/html"});
    res.write( data);
    res.end();
  });
}).listen( 8080);
