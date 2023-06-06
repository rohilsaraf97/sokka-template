const { StatusCodes } = require('http-status-codes')
const BaseError = require('./BaseError')

class UnauthorizedError extends BaseError {
  constructor(message) {
    super('UnauthorizedError', StatusCodes.UNAUTHORIZED, message)
  }
}

module.exports = UnauthorizedError
