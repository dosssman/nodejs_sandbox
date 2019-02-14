var http = require("http"), util = require('util');
var formidable = require("formidable");
var fs = require("fs");

http.createServer( function( req, res) {
  if( req.url == "/fileupload") {
    var form = new formidable.IncomingForm();
    form.parse( req, function( err, fields, files) {

      var oldpath = fields.filetoupload;
      var newpath = "/tmp/nodejs/" + fields.filetoupload;
      fs.rename( oldpath, newpath, function( err) {
        // if (err) throw err;
        res.write( "File uploaded and moved");
        res.end( util.inspect({ fields: fields, files: files}));
      });
    });
  } else {
    res.writeHead( 200, {"Content-Type": "text/html"});
    fs.readFile( "./tmplt/noob11_form.html", function( err, data){
      res.write( data);
      res.end()
    });
  }
}).listen(8080)
