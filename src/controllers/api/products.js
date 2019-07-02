import express from 'express';
import dataSource from '../../dataSource';
import stateCode from '../../helpers/stateCode';

const router = express.Router();
const { ProductApi } = dataSource;

router.get('/product', async function(req, res, next) {
    const { page, limit } = req.query;

    try{
        const result = await ProductApi.getProducts( page, limit )

        if(result && result.length === 0) {
            return res.json({ message: stateCode.ProductNotFound})
        }

        return res.json({
            data: result,
            message: stateCode.Success
        })
    }catch(err){
        next(err)
    }
})

export { router as productRouter };