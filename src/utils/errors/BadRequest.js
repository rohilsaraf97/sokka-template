const { StatusCodes } = require('http-status-codes')
const BaseError = require('./BaseError')

class BadRequest extends BaseError {
  constructor(message) {
    super('BadRequestError', StatusCodes.BAD_REQUEST, message)
  }
}

module.exports = BadRequest
