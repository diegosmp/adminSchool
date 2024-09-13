import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateMonitorController } from '../controllers/monitor/CreateMonitorController'
import { DetailMonitorController } from '../controllers/monitor/DetailMonitorController'
import { EditMonitorController } from '../controllers/monitor/EditMonitorController'
import { DeleteMonitorController } from '../controllers/monitor/DeleteMonitorController'
import { AllMonitorController } from '../controllers/monitor/AllMonitorController'

const route = Router()

route.post('/create', isAuthenticated, new CreateMonitorController().handle)
route.get('/detail', isAuthenticated, new DetailMonitorController().handle)
route.put('/edit', isAuthenticated, new EditMonitorController().handle)
route.delete('/delete', isAuthenticated, new DeleteMonitorController().handle)
route.get('/all', isAuthenticated, new AllMonitorController().handle)

export default route
