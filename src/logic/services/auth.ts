import { SimpleAsyncTokenService } from './service_classes/simpleAsyncTokenService'
import {Credentials} from '../../models/credentials'
const error_handler = require("../../common/Errors/error_handler")

module.exports = {
    simple_async_login: async(req:any, res:any) => {
        try {
            let credentials = new Credentials(req.body.username, req.body.password);
            let token_service =  new SimpleAsyncTokenService();

            token_service.requestToken(credentials).then(token=>{
                res.json({ token: token });
            }).catch(err=>{
                res.status(400).json(error_handler(err))
            })
        } catch (error) {
            res.status(400).json(error_handler(error))
        }
        
    }
}