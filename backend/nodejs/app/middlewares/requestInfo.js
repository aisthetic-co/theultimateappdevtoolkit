const logger = require("../helpers/logger/index")

const requestInfo = async(req,res,next)=>{
    try{
        const ip = req.headers?.['x-forwarded-for'] || req.ip || req.socket['remoteAddress'];
        const path = req.path;
        const params = req.params;
        const query = req.query;
        const method = req.method;
        const body = { ...req.body };
        const origin = req.headers?.origin;


        const infoObject = {
            user,
            ip,
            path,
            body,
            params,
            query,
            method,
            origin
        };

        logger.info(`Request Info - ${JSON.stringify(infoObject)}`);

        next()
    }catch(err){
        let message = `Error in requestInfo ${JSON.stringify({
          message: err.message,
          stack: err.stack
        })}`
        logger.error(msg);
        res.status(400).json({message})
    }
    
}


 module.exports = requestInfo