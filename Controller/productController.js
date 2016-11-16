function findAll(req) {
  console.log("Manipulador de petición 'findAll' ha sido llamado.");

  var productList = [];

  console.log(req.body);

  for (var i = 0; i <= 10; i++) {
  	var car = {type:"Fiat", model:500, color:"white", aas:"500", dddsfs:"white"}; 
  	productList[i] = car;
  }

  return productList;
}

function findById(req) {
  console.log("Manipulador de petición 'findById' ha sido llamado.");
  return "Hola Subir";
}

function create(req) {
  console.log("Manipulador de petición 'findById' ha sido llamado.");
  return "Hola Subir";
}

exports.findAll = findAll;
exports.findById = findById;
exports.create = create;