import insertDemoDate from './randomDataGenerator';
import { productFactory, userFactory } from './dataFactory';
import db from '../models';

async function initializeDemoData() {
    const addProducts = await insertDemoDate( db.Products, productFactory, 300 );
    const addUsers = await insertDemoDate( db.Users, userFactory, 50 );
}

export default initializeDemoData;