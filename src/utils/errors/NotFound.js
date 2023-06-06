const { StatusCodes } = require('http-status-codes')
const BaseError = require('./BaseError')

class NotFoundError extends BaseError {
  constructor(message) {
    super('NotFoundError', StatusCodes.NOT_FOUND, message)
  }
}

module.exports = NotFoundError
