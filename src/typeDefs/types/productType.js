import { gql } from 'apollo-server';

const productType = gql`
    type Product {
        productcode: string,
        productname: string,
        productdescription: string,
        salesprice: float,
        costprice: float,
        productimage: string,
        creatAt: string,
        updateAt: string
    }
`;

export productType;