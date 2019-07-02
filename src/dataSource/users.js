import isArray from 'lodash/isArray';
import isEmail from 'isemail';
import db from '../models';
import stateCode from '../helpers/stateCode';

class UserAPI {
    constructor() {
    }

    async getAllUsers() {
        try{
            const users = await db.Users.findAll({
                attributes: ['email', 'firstName', 'lastName']
            })
            return users;

        }catch(err){
            throw new Error(err)
        }
        
    }

    async findUserByEmail({ email }) {
        try{
            const user = await db.Users.findOne({
                where: {
                    email:email,
                }
            })

            return user

        }catch(err){
            throw new Error(err)
        }
    }

    async updateUserPasswordByEmail({ email, password }) {
        try{
            const result = await db.Users.update(
                {
                    password:password
                },
                {
                    where: { email: email}
                }
            )

            return result 

        }catch(err){
            throw new Error(err)
        }
    }

    async deleteUserByEmail({ email }) {
        try{
            const result = await db.Users.destroy({
                where: {
                    email:email,
                }
            })

            return result
        }catch(err) {
            throw new Error(err)
        }
    }

    async checkUserAuthentication({ email, password }) {
        try{
            const user = await db.Users.findOne({
                where: {
                    email:email,
                    password: password,
                }
            })

            return user;

        }catch(err){
            throw new Error(err)
        }
    }

    async signup({ email, password, firstname, lastname}) {
        if(this.checkEmail(email)) {
            try{
                const result = await db.Users.findOrCreate({
                    where: {email: email}, 
                    defaults: {
                        password: password,
                        firstName: firstname,
                        lastName: lastname
                    }
                });

                let hasEmail = result[1];

                if(hasEmail) {
                    return stateCode.Failure;
                }else{
                    return stateCode.Success;
                }
            }catch(err){
                throw new Error(err)
            }
        }else{
            return stateCode.Invalid;
        }
    }

    checkEmail( email ) {
        if(!email || !isEmail.validate(email)) {
            return false;
        }

        return true;
    }
}

export default new UserAPI();