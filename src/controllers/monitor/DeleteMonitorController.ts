import { Request, Response } from 'express'
import { DeleteMonitorService } from '../../services/monitor/DeleteMonitorService'

class DeleteMonitorController {
  async handle(req: Request, res: Response) {
    const monitorId = req.query.monitorId as string

    const deleteMonitorService = new DeleteMonitorService()
    const monitor = deleteMonitorService.execute(monitorId)

    return res.json(monitor)
  }
}

export { DeleteMonitorController }
