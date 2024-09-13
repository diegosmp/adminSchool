import { Request, Response } from 'express'
import { AllMonitorService } from '../../services/monitor/AllMonitorService'

class AllMonitorController {
  async handle(req: Request, res: Response) {
    const allMonitorService = new AllMonitorService()
    const monitor = await allMonitorService.execute()

    return res.json(monitor)
  }
}

export { AllMonitorController }
