'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productcompany: {
        type: Sequelize.STRING
      },
      productcode: {
        type: Sequelize.STRING
      },
      productname: {
        type: Sequelize.STRING
      },
      productdescription: {
        type: Sequelize.STRING(2048)
      },
      salesprice: {
        type: Sequelize.DOUBLE
      },
      costprice: {
        type: Sequelize.DOUBLE
      },
      productimage: {
        type: Sequelize.STRING
      },
      creatAt: {
        type: Sequelize.STRING
      },
      updateAt: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};