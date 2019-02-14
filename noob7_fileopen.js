var http = require( "http");
var fs = require( "fs");

fs.open( "file_open.txt", "w", function( err, file) {
  if (err) throw err;
  console.log( "Writen");
});
