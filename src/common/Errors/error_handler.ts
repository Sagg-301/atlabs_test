const logger = require('../../loaders/logger')
module.exports = (error:Error) => {
    if (error.name && error.name == 'ValidationError') {
        return { error: error.name, message: error.message}
    }

    logger.error(error.stack)
    return { error: "Unknown", message: "There was an inner error", data: error }
}