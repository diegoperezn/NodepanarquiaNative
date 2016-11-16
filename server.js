var http = require("http");
var url = require("url");

function iniciar(route) {
	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;

		var content = route(pathname, request);

  		response.writeHead(200, {"Content-Type": "text/json"});
  		response.write(JSON.stringify(content));
		response.end();
	}

	http.createServer(onRequest).listen(8080);	

	console.log("servidor iniciado");
}

exports.iniciar = iniciar;


