import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateTeacherController } from '../controllers/teacher/CreateTeacherController'
import { EditTeacherController } from '../controllers/teacher/EditTeacherController'

const route = Router()

route.post('/create', isAuthenticated, new CreateTeacherController().handle)
route.post('/edit', isAuthenticated, new EditTeacherController().handle)

export default route
