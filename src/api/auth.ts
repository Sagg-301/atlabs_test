import app from "express"
import bodyParser from "body-parser"
const route = app.Router();
const auth_service = require('../logic/services/auth')

module.exports = (app:any) => {
    app.use('/auth', route);

    route.use(bodyParser.json()) // for parsing application/json
    route.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    /**Login */
    route.post('/login', auth_service.simple_async_login);
};