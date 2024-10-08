import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateTeacherController } from '../controllers/teacher/CreateTeacherController'
import { EditTeacherController } from '../controllers/teacher/EditTeacherController'
import { DetailTeacherController } from '../controllers/teacher/DetailTeacherController'
import { DeleteTeacherController } from '../controllers/teacher/DeleteTeacherController'
import { AllTeacherController } from '../controllers/teacher/AllTeacherController'

const route = Router()

route.post('/create', isAuthenticated, new CreateTeacherController().handle)
route.post('/edit', isAuthenticated, new EditTeacherController().handle)
route.get('/detail', isAuthenticated, new DetailTeacherController().handle)
route.delete('/delete', isAuthenticated, new DeleteTeacherController().handle)
route.get('/all', isAuthenticated, new AllTeacherController().handle)

export default route
