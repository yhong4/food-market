import db from '../models';
import stateCode from '../helpers/stateCode';

class ProductAPI {
    constructor() {
    }

    async getAllProductsCount() {
        try{
            const count = await db.Products.count()
            return count
        }catch(err){
            throw new Error(err)
        }
    }

    async getProducts( page, limit ) {
        try{
            const total = await this.getAllProductsCount()
            const pages = Math.floor(total/limit);
            const offset = (page - 1)*limit;
            const results = await db.Products.findAll(
                {
                    offset: offset,
                    limit: limit
                }
            )

            console.log(total, limit, pages, offset)
            console.log(results)

            let res = {
                total: total,
                pages: pages,
                currentPage: page,
                productList: results
            }

            return res
        }catch(err){
            throw new Error(err)
        }
    }
}

export default new ProductAPI();