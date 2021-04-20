const db = require("../models");
const ProductCategoryMaster = db.productcategorymaster;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.category_name) {
      res.status(400).send({
        message: "category name can not be empty!"
      });
      return;
    }
  
    const productcategorymasters = {
        category_name: req.body.category_name,
        status: req.body.status
    };
  
    ProductCategoryMaster.create(productcategorymasters)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the productcategorymasters."
        });
      });
  };


  //Get latest 3 Product Catagories Entries
  exports.findAll = (req, res) => {
    const category_name = req.query.category_name;
    var condition = category_name ? { category_name: { [Op.iLike]: `%${category_name}%` } } : null;
  
    ProductCategoryMaster.findAll({  limit: 3,where: condition,order: [ [ 'createdAt', 'DESC' ]] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ProductCategoryMaster."
        });
      });
  };

 /* exports.findAll = (req, res) => {
    const category_name = req.query.category_name;
    var condition = category_name ? { category_name: { [Op.iLike]: `%${category_name}%` } } : null;
  
    ProductCategoryMaster.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ProductCategoryMaster."
        });
      });
  };*/

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    ProductCategoryMaster.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ProductCategoryMaster with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    ProductCategoryMaster.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ProductCategoryMaster was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ProductCategoryMaster with id=${id}. Maybe ProductCategoryMaster was not found or req.body is empty!`
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
  
    ProductCategoryMaster.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ProductCategoryMaster was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ProductCategoryMaster with id=${id}. Maybe ProductCategoryMaster was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ProductCategoryMaster with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    ProductCategoryMaster.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} ProductCategoryMaster were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all ProductCategoryMaster."
        });
      });
  };
