var formidable = require("formidable"), http=require("http"),
  util=require("util"), fs = require("fs");

http.createServer( function( req, res) {
  if(req.url == "/upload" && req.method.toLowerCase() == "post") {
    var form = new formidable.IncomingForm();

    form.parse( req, function( err, fields, files) {
      res.writeHead( 200, {"Content-Type": "text/plain"});
      res.write( "Received upload");
      res.end( util.inspect( {fields: fields, files: files}));
      var oldpath = files.upload.path;
      var newpath = "/tmp/nodejs/" + files.upload.name;
      fs.rename( oldpath, newpath, function( err) {
        if (err) throw err;
      });
    });

    return ;
  }

  res.writeHead( 200, {"Content-Type": "text/html"});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>');
}).listen(8080);
