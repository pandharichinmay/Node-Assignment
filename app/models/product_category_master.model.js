module.exports = (sequelize, Sequelize) => {
    const ProductCategoryMaster = sequelize.define("productcategorymaster", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
     category_name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
    });
  
    return ProductCategoryMaster;
  };