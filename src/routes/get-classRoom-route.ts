import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateClassRoomController } from '../controllers/classroom/CreateClassRoomController'
import { DetailsClassRoomController } from '../controllers/classroom/DetailsClassRoomController'
import { AllClassRoomController } from '../controllers/classroom/AllClassRoomController'
import { EditClassRoomController } from '../controllers/classroom/EditClassRoomController'

const route = Router()

route.post('/create', isAuthenticated, new CreateClassRoomController().handle)
route.get('/details', isAuthenticated, new DetailsClassRoomController().handle)
route.get('/all', isAuthenticated, new AllClassRoomController().handle)
route.put('/details/edit', isAuthenticated, new EditClassRoomController().handle)

export default route
