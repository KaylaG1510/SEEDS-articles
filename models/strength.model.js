const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const strengthSchema = new Schema({
  strength: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Strength = mongoose.model('Strength', strengthSchema);

module.exports = Strength;