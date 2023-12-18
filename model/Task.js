const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  completed: Boolean,
})

module.exports = mongoose.model('Task', taskSchema)
