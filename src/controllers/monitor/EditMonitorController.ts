import { Request, Response } from 'express'
import { EditMonitorService } from '../../services/monitor/EditMonitorService'

class EditMonitorController {
  async handle(req: Request, res: Response) {
    const { fullname, status } = req.body
    const monitorId = req.query.monitorId as string

    const editMonitorService = new EditMonitorService()
    const monitor = await editMonitorService.execute({ fullname, status, monitorId })

    return res.json(monitor)
  }
}

export { EditMonitorController }
