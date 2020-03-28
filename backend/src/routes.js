const express = require('express')

const OngController = require('./controllers/OngControllers')
const IncidentsController = require('./controllers/IncidentControllers')
const ProfileController = require('./controllers/ProfileControllers')
const SessionController = require('./controllers/SessionControllers')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes
