import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateStudentController } from '../controllers/student/CreateStudentController'

const route = Router()

route.post('/create', isAuthenticated, new CreateStudentController().handle)

export default route
