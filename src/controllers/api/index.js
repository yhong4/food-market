import express from 'express';
import { userRouter } from './users';
import { productRouter } from './products';

const router = express.Router();

router.use('/', userRouter);
router.use('/', productRouter);


router.use(function(err, req, res, next) {
    console.log("err: ", err);
})

export { router as apiRouter};