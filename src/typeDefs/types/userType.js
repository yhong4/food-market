import { gql } from 'apollo-server';

const userType = gql`
    type User{
        firstName: string,
        lastName: string,
        email: string,
        password: string
    }
`;

export userType;