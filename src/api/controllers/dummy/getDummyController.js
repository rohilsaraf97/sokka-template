const getDummyController = async (req, res, next) => {
  try {
    // controller logic
    res.send('Yay your app is working!')
  } catch (error) {
    next(error)
  }
}

module.exports = getDummyController
