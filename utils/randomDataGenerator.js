import hasTableData from './isDataBaseEmpty';
import db from '../models';
import logger from '../logs';
import Bounce from '@hapi/bounce';

async function insertDemoDate( table, factory) {
    const hasData = await hasTableData(table);
    if( !hasData ){
        try{
            db.sequelize.sync().then(()=>{
                table.bulkCreate(
                    factory(300)
                )
            })
            return true;
        }catch(err){
            console.log('inserdemo err: ',err)
            logger.error( 
                new Error( Bounce.rethrow(err, 'system'))
            );
        } 
    }

    return false;
}

export default insertDemoDate;

