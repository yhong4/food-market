import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorhandler from 'errorhandler';
import dotenv from 'dotenv';
import fs from 'fs';

import initializeDemoData from './src/helpers';
import middlewares from './src/middlewares';
import router from './src/controllers';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));

if(!isProduction){
    app.use(errorhandler());
    initializeDemoData();
}

app.use(router);

app.use((req, res, next) => middlewares.pageError.pageNotFound(req, res, next));

if(!isProduction) {
    app.use((req, res, next) => middlewares.pageError.errorPageResponseInProduction(req, res, next));
};

app.use((req, res, next) => middlewares.pageError.errorPageResponseInDevelopment(req, res, next));

app.listen( process.env.PORT || 3000, () => {
    console.log(`Server is listening on port: ${ process.env.PORT || 3000 }`)
})
