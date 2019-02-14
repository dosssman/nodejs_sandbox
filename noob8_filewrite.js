var http = require( "http");

fs.writeFile( "file_write.txt", "Written content", function(err) {
  if (err) throw err;
  console.log( "Saved!");
});
