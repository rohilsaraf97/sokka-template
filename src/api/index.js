const { dummyRouter } = require('./routes')

const initRoutes = ({ expressApp }) => {
  expressApp.use('/dummy', dummyRouter)
}

module.exports = initRoutes
