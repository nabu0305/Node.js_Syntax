var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
	var title = queryData.id;
	var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url,true).pathname;

	if(pathname === '/'){
		if(queryData.id === undefined){
			fs.readdir('./data', (err, filelist) => {
				var list = '<ul>';
				var title = 'Welcome';
				var description = 'Hello Node js';
				var i = 0;
				while(i < filelist.length){
					list = list +`<li><a 
					href="?id=${filelist}">${filelist}</a></li>
					`
					i = i+1;
				}
				list = list + '</ul>';
				var template = `
				<!doctype html>
				<html>
				<head>
				  <title>WEB1 - ${title}</title>
				  <meta charset="utf-8">
				</head>
				<body>
				  <h1><a href="index.html">WEB</a></h1>
				  <ol>
					<li><a href="?id=HTML">HTML</a></li>
					<li><a href="?id=CSS">CSS</a></li>
					<li><a href="?id=JavaScript">JavaScript</a></li>
				  </ol>
				  <h2>${title}</h2>
				  <p>${description}</p>
				</body>
				</html>
				`;
				response.writeHead(200);
				response.end(template);
			  });
			
		}
		else{
			fs.readFile(`data/${queryData.id}`,'utf-8',(err,description)=>{
				var template = `
				<!doctype html>
				<html>
				<head>
				  <title>WEB1 - ${title}</title>
				  <meta charset="utf-8">
				</head>
				<body>
				  <h1><a href="index.html">WEB</a></h1>
				  <ol>
					<li><a href="?id=HTML">HTML</a></li>
					<li><a href="?id=CSS">CSS</a></li>
					<li><a href="?id=JavaScript">JavaScript</a></li>
				  </ol>
				  <h2>${title}</h2>
				  <p>${description}</p>
				</body>
				</html>
				`;
				response.writeHead(200);
				response.end(template);
			});
		}
	}
	else{
		response.writeHead(404);
		response.end('Not found');
	}
	
});
app.listen(3000);