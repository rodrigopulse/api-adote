import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users/:id', UserController.id)
routes.post('/users/create', UserController.create)
routes.post('/users/login', UserController.login)

export default routes
