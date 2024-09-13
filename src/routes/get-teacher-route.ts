import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateTeacherController } from '../controllers/teacher/CreateTeacherController'

const route = Router()

route.post('/create', isAuthenticated, new CreateTeacherController().handle)

export default route
