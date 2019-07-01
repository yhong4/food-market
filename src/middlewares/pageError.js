class pageError {
    constructor(){
    }

    pageNotFound(req, res, next) {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
    
    errorPageResponseInProduction(req, res, next, err) {
        res.status(err.status || 500);
            res.json({
                'error': {
                    message: err.message,
                    error: err
                }
            })
    }
    
    errorPageResponseInDevelopment(req, res, next, err) {
        res.status(err.status || 500);
            res.json({
                'error': `${err.status}`
            })
    }
}

export default new pageError();
