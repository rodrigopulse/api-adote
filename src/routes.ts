import { Router } from 'express'
import Auth from './services/auth'
import UserController from './controllers/UserController'
import PageController from './controllers/PageController'
import PetController from './controllers/PetController'

const auth = new Auth()
const routes = Router()

// Users
routes.get('/users/:id', auth.verificaToken, UserController.id)
routes.post('/users/create', UserController.create)
routes.post('/users/login', UserController.login)

// Pages
routes.post('/pages/create', PageController.create)

// Pets
routes.post('/pets/create', PetController.create)

export default routes
