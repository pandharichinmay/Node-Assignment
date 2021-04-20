const db = require("../models");
const ProductDetails = db.productdetails;

const Op = db.Sequelize.Op;
 
exports.create = (req, res) => {
    // Validate request
    if (!req.body.product_name) {
      res.status(400).send({
        message: "product name can not be empty!"
      });
      return;
    }
  
    const productdetails = {
        product_name: req.body.product_name,
        price: req.body.status.price,
        quantity: req.body.status.quantity,
        category_id: req.body.status.category_id
    };
  
    ProductDetails.create(productdetails)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the productdetails."
        });
      });
  };

  exports.findAll = (req, res) => {
    const product_name = req.query.product_name;
    var condition = product_name ? { product_name: { [Op.iLike]: `%${product_name}%` } } : null;
  
    ProductDetails.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ProductDetails."
        });
      });
  };
 
  /*exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ProductDetails.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ProductDetails with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    ProductDetails.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ProductDetails was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ProductDetails with id=${id}. Maybe ProductDetails was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ProductCategoryMaster with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    ProductDetails.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ProductDetails was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ProductDetails with id=${id}. Maybe ProductDetails was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ProductDetails with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    ProductDetails.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} ProductDetails were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all ProductDetails."
        });
      });
  }; */
