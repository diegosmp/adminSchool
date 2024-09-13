import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateClassRoomController } from '../controllers/classroom/CreateClassRoomController'

const route = Router()

route.post('/create', isAuthenticated, new CreateClassRoomController().handle)

export default route
