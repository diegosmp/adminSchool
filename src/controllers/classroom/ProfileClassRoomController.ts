import { Request, Response } from 'express'
import { ProfileClassRoomService } from '../../services/classroom/ProfileClassRoomService'

class ProfileClassRoomController {
  async handle(req: Request, res: Response) {
    const classId = req.query.classId as string
    const profileClassRoomService = new ProfileClassRoomService()
    const classRoom = await profileClassRoomService.execute(classId)

    return res.json(classRoom)
  }
}

export { ProfileClassRoomController }
