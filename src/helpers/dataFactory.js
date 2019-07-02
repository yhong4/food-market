import * as faker from 'faker/locale/en_AU';

const CODE_LENGTH = 20;

export function generateFakerProductCode() {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < CODE_LENGTH; i++ ) {
       result += characters.charAt(~~(Math.random() * charactersLength));
    }
    return result;
}

export function productFactory(amount) {
    let products = [];
    let count = 0;
    let category = faker.company.companyName();

    for(let i = 0; i < amount; i++) {
        if(count > 50) {
            count = 0;
            category = faker.company.companyName();
        }
        let product = {};
        product.productcompany = category
        product.productcode = generateFakerProductCode();
        product.productname = faker.lorem.word();
        product.productdescription = faker.lorem.paragraph();
        product.salesprice = ~~(Math.random()*1000)+50;
        product.costprice = ~~(Math.random()*500)+20;
        product.productimage = `${faker.image.food()}?random=${~~(Math.random()*10000)}`;
        product.creatAt = Date.now().toString();
        product.updateAt = Date.now().toString();
        products.push(product);
        count += 1;
    }
    return products;
}

export function userFactory(amount) {
    let users = []
    for( let i = 0; i < amount; i++){
        let user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: "12345"
        } 

        users.push(user);
    }
    return users;
}

