'use strict';
import productFactory from '../src/helpers/dataFactory';


module.exports = {
  up: (queryInterface, Sequelize) => {
      const products = productFactory(300)
      return queryInterface.bulkInsert('Products', products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
