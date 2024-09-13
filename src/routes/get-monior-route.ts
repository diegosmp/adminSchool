import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateMonitorController } from '../controllers/monitor/CreateMonitorController'

const route = Router()

route.post('/create', isAuthenticated, new CreateMonitorController().handle)

export default route
