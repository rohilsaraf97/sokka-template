const { dummyRouter } = require('./routes')
const { NotFound, errorHandler } = require('../utils/errors')
const { limiter } = require('../config')

const initRoutes = ({ expressApp }) => {
  // rate limiting
  expressApp.use(limiter)

  // add your routes here
  expressApp.use('/dummy', dummyRouter)

  //error handling
  expressApp.use((req, res, next) => {
    try {
      throw new NotFound('This path does not exist!')
    } catch (error) {
      next(error)
    }
  })
  expressApp.use(errorHandler.logError, errorHandler.handleErrorResponse)

  process.on('uncaughtException', errorHandler.logError)

  process.on('unhandledRejection', errorHandler.logError)
}

module.exports = initRoutes
