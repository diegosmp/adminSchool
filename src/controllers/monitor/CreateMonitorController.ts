import { Request, Response } from 'express'
import { CreateMonitorService } from '../../services/monitor/CreateMonitorService'

class CreateMonitorController {
  async handle(req: Request, res: Response) {
    const { fullname, classId } = req.body
    const createMonitorService = new CreateMonitorService()
    const monitor = await createMonitorService.execute({ fullname, classId })

    return res.json(monitor)
  }
}

export { CreateMonitorController }
