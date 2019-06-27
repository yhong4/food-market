import logger from '../logs';
import Bounce from '@hapi/bounce';

async function hasTableData( table ) {
    try{
        let count = await table.count();
        return !!count;
    }catch(err){
        console.log('hastable err:', err)
        logger.error( 
            new Error(Bounce.rethrow(err, 'system'))
        );
    }
}

export default hasTableData;
