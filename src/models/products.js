'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    productcompany: DataTypes.STRING,
    productcode: DataTypes.STRING,
    productname: DataTypes.STRING,
    productdescription: DataTypes.STRING(2048),
    salesprice: DataTypes.DOUBLE,
    costprice: DataTypes.DOUBLE,
    productimage: DataTypes.STRING,
    creatAt: DataTypes.STRING,
    updateAt: DataTypes.STRING
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};