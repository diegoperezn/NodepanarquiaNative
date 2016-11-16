function route(pathname, request) {
	var handle = require("./Handler/"+ pathname.split('/')[1] +"Handler").handle || {};
    console.log("Petición para " + pathname + " recibida.");	
    if (typeof handle[pathname] === 'function') {
    	return handle[pathname](request);
  	} else {
    	console.log("No se encontro manipulador para " + pathname);
    	return "404 No Encontrado";
  	}
}

exports.route = route;