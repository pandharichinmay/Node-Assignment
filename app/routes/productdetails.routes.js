module.exports = app => {
     const productdetailscontroller = require("../controllers/productdetails.controller.js");
   
    var router = require("express").Router();
  
     // Create Product category master
     router.post("/", productdetailscontroller.create);
  
     // Retrieve all Product category master
     router.get("/", productdetailscontroller.findAll);
   
     /*
     // Retrieve all published Product category master
     router.get("/published", productdetailscontroller.findAllPublished);
   
     // Retrieve a single Product category master with id
     router.get("/:id", productdetailscontroller.findOne);
   
     // Update a Product category master with id
     router.put("/:id", productdetailscontroller.update);
   
     // Delete a Product category master with id
     router.delete("/:id", productdetailscontroller.delete);
   
     // Delete all Product category master
     router.delete("/", productdetailscontroller.deleteAll);
   */
  
    app.use('/api/productdetailscontroller', router);
    
  };