import { Request, Response } from 'express'
import { DetailMonitorService } from '../../services/monitor/DetailMonitorService'

class DetailMonitorController {
  async handle(req: Request, res: Response) {
    const monitorId = req.query.monitorId as string
    const detailMonitorService = new DetailMonitorService()

    const monitor = await detailMonitorService.execute(monitorId)

    return res.json(monitor)
  }
}

export { DetailMonitorController }
