const expressLoader = require('./express');

module.exports = async(expressApp:any) => {
    await expressLoader(expressApp);
    console.log('Express Initialized');
}