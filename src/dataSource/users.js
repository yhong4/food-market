import isEmail from './node_modules/isemail';
import db from '../models';

import { userFactory } from '../helpers/dataFactory';
import { insertDemoDate } from '../helpers/randomDataGenerator';

class UserAPI {
    constructor() {
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

            return user ? "success" : 'no user';
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

export default new UserAPI();