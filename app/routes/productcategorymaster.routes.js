module.exports = app => {
    const productcategorymastercontroller = require("../controllers/productcategorymaster.controller.js");
   
    var router = require("express").Router();
  
    // Create Product category master
    router.post("/", productcategorymastercontroller.create);
  
    // Retrieve latest 3  Product category master
    router.get("/", productcategorymastercontroller.findAll);
  
    // Retrieve a single Product category master with id
    router.get("/:id", productcategorymastercontroller.findOne);
  
    // Update a Product category master with id
    router.put("/:id", productcategorymastercontroller.update);
  
    // Delete a Product category master with id
    router.delete("/:id", productcategorymastercontroller.delete);
  
    // Delete all Product category master
    router.delete("/", productcategorymastercontroller.deleteAll);
  
    app.use('/api/productcategorymaster', router);
   
  };