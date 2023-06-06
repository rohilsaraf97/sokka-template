const limiter = require('./limiter')

require('dotenv').config()

const config = {
  PORT: process.env.PORT,
  limiter,
}

module.exports = config
