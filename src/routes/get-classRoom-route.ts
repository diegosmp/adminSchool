import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateClassRoomController } from '../controllers/classroom/CreateClassRoomController'
import { DetailsClassRoomController } from '../controllers/classroom/DetailsClassRoomController'
import { AllClassRoomController } from '../controllers/classroom/AllClassRoomController'
import { EditClassRoomController } from '../controllers/classroom/EditClassRoomController'
import { DeleteClassRoomController } from '../controllers/classroom/DeleteClassRoomController'

const route = Router()

route.post('/create', isAuthenticated, new CreateClassRoomController().handle)
route.get('/details', isAuthenticated, new DetailsClassRoomController().handle)
route.get('/all', isAuthenticated, new AllClassRoomController().handle)
route.put('/edit', isAuthenticated, new EditClassRoomController().handle)
route.delete('/delete', isAuthenticated, new DeleteClassRoomController().handle)

export default route
