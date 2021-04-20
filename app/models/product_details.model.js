module.exports = (sequelize, Sequelize) => {
    const ProductDetails = sequelize.define("productdetails", {
        product_name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {       
          model: 'productcategorymaster',
          key: 'id'
        }
      },
    });
  
    return ProductDetails;
  };