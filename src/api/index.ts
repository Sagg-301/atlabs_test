import express from "express"
const auth = require('./auth');
// guaranteed to get dependencies
module.exports = () => {
    const app = express.Router();

    auth(app);

    return app
}