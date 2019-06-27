import { gql } from 'apollo-server';


export const query = gql`
    type Query {
        getProducts(
            productNum: Int!
            after: Int
        ): ProductConnection!
    }

    type ProductConnection {
        hasMore: Boolean!
        cursor: Int
        products: [Product]!
    }
`
