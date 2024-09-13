import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateStudentController } from '../controllers/student/CreateStudentController'
import { EditStudentController } from '../controllers/student/EditStudentController'
import { DeleteStudentController } from '../controllers/student/DeleteStudentController'
import { DetailStudentController } from '../controllers/student/DetailStudentController'
import { AllStudentController } from '../controllers/student/AllStudentController'

const route = Router()

route.post('/create', isAuthenticated, new CreateStudentController().handle)
route.put('/edit', isAuthenticated, new EditStudentController().handle)
route.delete('delete', isAuthenticated, new DeleteStudentController().handle)
route.get('/detail', isAuthenticated, new DetailStudentController().handle)
route.get('/all', isAuthenticated, new AllStudentController().handle)

export default route
