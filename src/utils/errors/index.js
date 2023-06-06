const BadRequest = require('./BadRequest')
const InternalServerError = require('./InternalServerError')
const NotFound = require('./NotFound')
const Unauthorized = require('./Unauthorized')
const BaseError = require('./BaseError')
const errorHandler = require('./errorHandler')

module.exports = {
  BadRequest,
  InternalServerError,
  NotFound,
  Unauthorized,
  BaseError,
  errorHandler,
}
