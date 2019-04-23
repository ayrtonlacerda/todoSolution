const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  color: {
    type: Number,
    require: true
  },
  subprojects: [
    {
      name: {
        type: String
      },
      color: {
        type: Number
      }
    }
  ],
})

module.exports = mongoose.model('Project', ProjectSchema)