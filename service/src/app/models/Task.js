const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    require: true,
    default: null,
  },
  // subprotject: {},
  check: {
    type: Boolean,
    required: true,
    default: false,
  },
  subtasks: [
    {
      name: {
        type: String
      },
      check: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  ],
  labels: [],
  priority: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Task', TaskSchema)