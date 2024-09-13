import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateMonitorController } from '../controllers/monitor/CreateMonitorController'
import { DetailMonitorController } from '../controllers/monitor/DetailMonitorController'

const route = Router()

route.post('/create', isAuthenticated, new CreateMonitorController().handle)
route.get('/detail', isAuthenticated, new DetailMonitorController().handle)

export default route
