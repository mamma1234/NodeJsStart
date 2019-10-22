var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
	var _queryData = url.parse(_url, true).query;
	console.log(_queryData);
    console.log(_queryData.id);
    var title = _queryData.id;
    if(_url == '/'){
      title = 'welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${_queryData.id}`, 'utf8', function(err, description){
        var template=`
        <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>
        `;
        response.end(template);
    });
	//console.log(__dirname + _url);
    //response.end(fs.readFileSync(__dirname + _url));

});
app.listen(3000);