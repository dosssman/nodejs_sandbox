var http = require( "http");
var fs = require( "fs");

// Create a file to delete first
fs.writeFile( "file_to_delete.txt", "w", function(err) {
  if (err) throw err;
  console.log("Created file to delete.txt");
});

// Wait 3000 ms before deleting
setTimeout( function(){
  fs.unlink( "file_to_delete.txt", function( err) {
    if (err) throw err;
    console.log( "Deleted gile{?}");
  });
}, 3000);
