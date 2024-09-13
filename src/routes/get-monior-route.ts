import { Router } from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateMonitorController } from '../controllers/monitor/CreateMonitorController'
import { DetailMonitorController } from '../controllers/monitor/DetailMonitorController'
import { EditMonitorController } from '../controllers/monitor/EditMonitorController'
import { DeleteMonitorController } from '../controllers/monitor/DeleteMonitorController'

const route = Router()

route.post('/create', isAuthenticated, new CreateMonitorController().handle)
route.get('/detail', isAuthenticated, new DetailMonitorController().handle)
route.put('/edit', isAuthenticated, new EditMonitorController().handle)
route.delete('/delete', isAuthenticated, new DeleteMonitorController().handle)

export default route
