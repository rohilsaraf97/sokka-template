const { Schema, model } = require('mongoose')

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
})

const User = model('User', userSchema)

module.exports = User
