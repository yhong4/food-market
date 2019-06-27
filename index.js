import { productFactory } from './utils/productFactory';
import db from './models';
import initializeDemoData from './utils';

initializeDemoData();

// db.sequelize.sync().then(()=>{
//     db.Products.bulkCreate(
//         productFactory(5)
//     )
// })


// console.log(JSON.stringify(productFactory(5), null, 4));

