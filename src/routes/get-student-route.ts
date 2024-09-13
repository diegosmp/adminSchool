import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateStudentController } from '../controllers/student/CreateStudentController'
import { EditStudentController } from '../controllers/student/EditStudentController'
import { DeleteStudentController } from '../controllers/student/DeleteStudentController'

const route = Router()

route.post('/create', isAuthenticated, new CreateStudentController().handle)
route.put('/edit', isAuthenticated, new EditStudentController().handle)
route.delete('delete', isAuthenticated, new DeleteStudentController().handle)

export default route
