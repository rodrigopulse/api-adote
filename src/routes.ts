import { Router } from 'express'
import Auth from './services/auth'
import UserController from './controllers/UserController'

const auth = new Auth()
const routes = Router()

routes.get('/users/:id', auth.verificaToken, UserController.id)
routes.post('/users/create', UserController.create)
routes.post('/users/login', UserController.login)

export default routes
