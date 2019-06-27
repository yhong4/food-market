import insertDemoDate from './randomDataGenerator';
import { productFactory } from './productFactory';
import db from '../models';

async function initializeDemoData() {
    const addProducts = await insertDemoDate( db.Products, productFactory );
    console.log("11",addProducts)
}

export default initializeDemoData;