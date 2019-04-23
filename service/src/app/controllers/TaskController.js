const Task = require('../models/Task')


class TaskController {
  async store(req, res) {
    const filters = {}

    // consulta por valores de check
    if (req.query.check) {
      filters.check = {}
      filters.check.$eq = req.query.check

    }

    if (req.query.project) {
      filters.project = {}
      filters.project.$eq = req.query.project
    }

    const tasks = await Task.find(filters).populate('project')

    return res.json(tasks)
  }

  async show(req, res) {
    const task = await Task.findById(req.params.id)

    return res.json(task)
  }

  async update(req, res) {
    const id = req.params.id
    const body = req.body
    const task = await Task.findByIdAndUpdate(id, body, { new: true })

    return res.json(task)
  }

  async create(req, res) {
    const task = await Task.create(req.body)

    return res.json(task)
  }

  async destroy(req, res) {
    const id = req.params.id
    await Task.findByIdAndDelete(id)

    return res.send()
  }
}

module.exports = new TaskController()