import { DataSource } from 'apollo-datasource';
import isEmail from 'isemail';
import db from '../models';

import { userFactory } from '../utils/dataFactory';
import { insertDemoDate } from '../utils/randomDataGenerator';

class UserAPI extends DataSource {
    constructor() {
        super();
    }

    async findUser({ email }) {
        if(this.checkEmail(email)) {
            const user = await db.Users.find({
                where: {
                    email:email,
                }
            })

            return user ? user : 'no user';
        }else{
            return 'invalid';
        }
    }

    async checkUserAuthentication({ email, password }) {
        if(this.checkEmail(email)) {
            const user = await db.Users.find({
                where: {
                    email:email,
                    password: password,
                }
            })

            return user ? user : 'no user';
        }else{
            return 'invalid';
        }
    }

    async signup({ email, password, firstname, lastname}) {
        if(this.checkEmail(email)) {
            const user = {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password,
            }

            const result = insertDemoDate( db.User, [user] );
            
            if(result) {
                return 'success';
            }else{
                return 'fail';
            }
        }else{
            return 'invalid';
        }
    }

    checkEmail( email ) {
        if(!email || !isEmail.validate(email)) {
            return false;
        }

        return true;
    }
}