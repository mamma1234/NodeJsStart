var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
	var _queryData = url.parse(_url, true).query;
	console.log(_queryData);
	console.log(_queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
	//console.log(__dirname + _url);
    //response.end(fs.readFileSync(__dirname + _url));
	response.end(_queryData.id);
});
app.listen(3000);