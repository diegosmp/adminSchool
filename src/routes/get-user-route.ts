import { Router } from 'express'
import { CreateUserController } from '../controllers/CreateUserController'
import { AuthUserController } from '../controllers/AuthUserController'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { ProfileUserController } from '../controllers/ProfileUserController'
import { EditUserController } from '../controllers/EditUserController'

const route = Router()

route.post('/create', new CreateUserController().handle)
route.post('/signin', new AuthUserController().handle)
route.get('/profile', isAuthenticated, new ProfileUserController().handle)
route.put('/profile', isAuthenticated, new EditUserController().handle)

export default route
