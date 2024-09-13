import { Router } from 'express'
import { CreateUserController } from '../controllers/user/CreateUserController'
import { AuthUserController } from '../controllers/user/AuthUserController'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { ProfileUserController } from '../controllers/user/ProfileUserController'
import { EditUserController } from '../controllers/user/EditUserController'
import { DeleteUserController } from '../controllers/user/DeleteUserController'

const route = Router()

route.post('/create', new CreateUserController().handle)
route.post('/signin', new AuthUserController().handle)
route.get('/profile', isAuthenticated, new ProfileUserController().handle)
route.put('/profile', isAuthenticated, new EditUserController().handle)
route.delete('/profile', isAuthenticated, new DeleteUserController().handle)

export default route
