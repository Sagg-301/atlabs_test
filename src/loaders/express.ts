// const bodyParser = require('body-parser');
const routes = require('../api')

module.exports = async(app:any) => {

    app.get('/status', (req:any, res:any) => { res.status(200).end(); });
    app.head('/status', (req:any, res:any) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use('/api', routes(app));

    // Return the express app
    return app;
}