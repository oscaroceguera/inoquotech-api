const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

module.exports = mongoose.model('User', new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    unique: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userStatus: {
    type: Schema.Types.String,
    required: true,
    ref: 'UserStatus',
    default: 'cdbdbb9a-07e7-4e73-8b2f-6e72e7eb14de'
  },
  moduleTypes:[
    {
      type: Schema.Types.String,
      required: true,
      ref: 'Module',
    }
  ],
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: Date
}))
