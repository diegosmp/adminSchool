import { Router } from 'express'
import { CreateUserController } from '../controllers/CreateUserController'

const route = Router()

route.post('/create', new CreateUserController().handle)

export default route
