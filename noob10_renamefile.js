var fs = require( "fs");

fs.writeFile( "file_to_rename.txt", "File to rewrite boy", function( err) {
  if (err) throw err;
  console.log( "Created init file");
});

setTimeout( function() {
  fs.rename( "file_to_rename.txt", "file_renamed.txt", function(err) {
    console.log( "File renamed");
  });
}, 3000);

// Not working as expected, both timed function seem to branch, neitherless
// the goal was achieved
setTimeout( function() {
  fs.unlink( "file_renamed.txt", function( err) {
    if ( err) throw err;
    console.log( "Fiel deleted succesffuly!");
  })
}, 3000);
