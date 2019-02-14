var http = require( "http");
http.createServer( function( req, res) {
  res.writeHead( 200, { "Content-Type": "text/json"});
  res.write( "Hell world");
  res.end();
}).listen( 8080);
