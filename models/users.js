const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name.'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a password.'],
    minlength: [8, 'Password must be at least 8 characters.']
  }
});

module.exports = mongoose.model('User', UserSchema);
