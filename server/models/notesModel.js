const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
  note: { type: String, required: true },
  liked: { type: Boolean, default: false },
});

module.exports = mongoose.model('Note', notesSchema);
