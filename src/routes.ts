import { Router } from 'express'
import verificaToken from './auth'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users/:id', verificaToken, UserController.id)
routes.post('/users/create', UserController.create)
routes.post('/users/login', UserController.login)

export default routes
