import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateStudentController } from '../controllers/student/CreateStudentController'
import { EditStudentController } from '../controllers/student/EditStudentController'

const route = Router()

route.post('/create', isAuthenticated, new CreateStudentController().handle)
route.put('/edit', isAuthenticated, new EditStudentController().handle)

export default route
