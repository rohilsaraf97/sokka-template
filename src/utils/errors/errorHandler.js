/* eslint-disable no-unused-vars */
const { logger } = require('../../logger')

class errorHandler {
  constructor() {
    this.logError = (error, _req, _res, next) => {
      if (process.env.NODE_ENV === 'development') logger.error(error.stack)
      logger.error(error.message)
      next(error)
    }
    this.handleErrorResponse = (error, _req, res, _next) => {
      res.set('Content-Type', 'application/json')
      const status = error.statusCode || 500
      res.status(status).send({
        error: error.message,
      })
    }
  }
}
module.exports = new errorHandler()
