const express = require('express')
const controllers = require('./app/controllers')

const routes = express.Router()

// routes for tasks
routes.get('/tasks', controllers.TaskController.store)
routes.get('/tasks/:id', controllers.TaskController.show)
routes.post('/tasks/', controllers.TaskController.create)
routes.put('/tasks/:id', controllers.TaskController.update)
routes.delete('/tasks/:id', controllers.TaskController.destroy)

// routes for project
routes.get('/project', controllers.ProjectController.store)
routes.get('/project/:id', controllers.ProjectController.show)
routes.post('/project', controllers.ProjectController.create)
routes.put('/project/:id', controllers.ProjectController.update)
routes.delete('/project/:id', controllers.ProjectController.destroy)

module.exports = routes
