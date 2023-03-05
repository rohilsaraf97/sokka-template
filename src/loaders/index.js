const { logger } = require('../logger')
const expressLoader = require('./expressLoader')
const mongooseLoader = require('./mongooseLoader')

const loaders = async ({ expressApp }) => {
  await expressLoader({ app: expressApp })
  logger.info('Express Initialised.')
  await mongooseLoader()
  logger.info('MongoDB Initialised')
}

module.exports = loaders
