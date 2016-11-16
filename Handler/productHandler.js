var requestHandlers = require("../Controller/productController");

var handle = {}
handle["/product/list"] = requestHandlers.findAll;
handle["/product/create"] = requestHandlers.create;
handle["/product"] = requestHandlers.findById;

exports.handle = handle