const { StatusCodes } = require('http-status-codes')
const BaseError = require('./BaseError')

class InternalServerError extends BaseError {
  constructor(message) {
    super('InternalServerError', StatusCodes.INTERNAL_SERVER_ERROR, message)
  }
}

module.exports = InternalServerError
