const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.jwt
  if (!token) return res.sendStatus(403) // if the user did not send a jwt token, they are unauthorized

  try {
    const data = jwt.verify(token, process.env.AUTH_SECRET)
    req.userData = data
    next()
  } catch (err) {
    return next(err)
  }
}

module.exports = authMiddleware
