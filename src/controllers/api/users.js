import express from 'express';
import datasource from '../../dataSource';
import stateCode from '../../helpers/stateCode';

const router = express.Router();
const { UserApi } = datasource;

router.get('/user', async function(req, res, next) {
    try{
        const result = await UserApi.getAllUsers()

        if(result && result.length === 0) {
            return res.json({ message: stateCode.UserNotFound })
        }
    
        return res.json({
            data: result,
            message: stateCode.Success
        })
    }catch(err){
        next(err)
    }
})

router.get('/user/email', async function(req, res, next) {
    const { email } = req.query;

    try{
        const result = await UserApi.findUserByEmail({ email })

        if(!result) {
            return res.json({ message: stateCode.UserNotFound})   
        }
    
        return res.json({ 
            data: result,
            message: stateCode.Success
         })

    }catch(err){
        return next(err)
    }
})

router.put('/user', async function(req, res, next) {
    const { email, password } = req.body;

    try{
        const result = await UserApi.updateUserPasswordByEmail({ email, password });

        if(!result) {
            return res.json({ message: stateCode.Failure })
        }

        return res.json({ message: stateCode.Success })
    }catch(err){
        return next(err)
    }
})

router.delete('/user', async function(req, res, next) {
    const { email } = req.body;

    try{
        const result = await UserApi.deleteUserByEmail({ email });

        if(!result) {
            return res.json({ message: stateCode.Failure })
        }

        return res.json({ message: stateCode.Success })
    }catch(err){
        return next(err)
    }
})


router.post('/signup', async function(req, res, next) {
    const { email, password, firstname, lastname } = req.body;
    if(!email || !password || !firstname || !lastname) {
        return res.json({ 
            message: stateCode.Invalid
        })
    }

    try{
        const result = await UserApi.signup({ email, password, firstname, lastname});

        if(result === stateCode.Success) {
            return res.json({ message: stateCode.Success })
        }
        if(result === stateCode.Invalid) {
            return res.json({ message: stateCode.Invalid })
        } 
        if(result === stateCode.Failure) {
            return res.json({ message: stateCode.Failure })
        } 
    }catch(err){
        return next(err)
    }
})

router.post('signin', async function(req, res, next) {
    const { email, password } = req.body;
    
    if(!email || !password) {
        return res.json({ message: stateCode.Invalid });
    }

    try{
        const result = await UserApi.checkUserAuthentication({ email, password })

        if(!result) {
            return res.json({ message: stateCode.Failure })
        }
        
        return res.json({ message: stateCode.Success })

    }catch(err){
        return next(err)
    }

   
})

router.get('/test', (req, res, next) => {
    console.log("hello")
    return res.json({
        data:"hello"
    })
})
// router.put('/user', (req, res, next) => {

// })

export { router as userRouter };