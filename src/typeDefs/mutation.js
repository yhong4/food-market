import { gql } from 'apollo-server';

export const mutation = gql`
    type Mutation {
        login(
            email:String
            password:String
        ): LoginResponse!

        signup(
            email:String
            password:String
            firstname:String
            lastname:String
        ): SignUpResponse!
    }

    type LoginResponse {
        success: Boolean!
        token: String
    }

    type SignUpResponse {
        success: Boolean!
    }
`