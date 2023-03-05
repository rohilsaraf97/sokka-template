const express = require('express')
const initRoutes = require('./api')
const config = require('./config')
const loaders = require('./loaders')
const { logger } = require('./logger')

const server = async () => {
  const app = express()

  loaders({ expressApp: app })
  initRoutes({ expressApp: app })

  app.listen(config.PORT, () => {
    logger.info(`Server started at http://localhost:${config.PORT}`)
  })
}

server()
