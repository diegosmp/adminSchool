import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateClassRoomController } from '../controllers/classroom/CreateClassRoomController'
import { ProfileClassRoomController } from '../controllers/classroom/ProfileClassRoomController'

const route = Router()

route.post('/create', isAuthenticated, new CreateClassRoomController().handle)
route.get('/profile', isAuthenticated, new ProfileClassRoomController().handle)

export default route
