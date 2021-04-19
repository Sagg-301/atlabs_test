// import config from './config';

// const express = require('express');
import express from "express"
const logger = require('./loaders/logger');

async function startServer() {
    const app = express();

    /**
     * A little hack here
     * Import/Export can only be used in 'top-level code'
     * Well, at least in node 10 without babel and at the time of writing
     * So we are using good old require.
     **/

    var server = app.listen(8080, () => {
        logger.info(`Server listening on port: 8080`);
    });

    await require('./loaders')(app);



}

startServer();