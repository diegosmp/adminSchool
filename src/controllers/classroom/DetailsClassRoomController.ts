import { Request, Response } from 'express'
import { DetailsClassRoomService } from '../../services/classroom/DetailsClassRoomService'

class DetailsClassRoomController {
  async handle(req: Request, res: Response) {
    const classId = req.query.classId as string
    const detailsClassRoomService = new DetailsClassRoomService()
    const classRoom = await detailsClassRoomService.execute(classId)

    return res.json(classRoom)
  }
}

export { DetailsClassRoomController }
