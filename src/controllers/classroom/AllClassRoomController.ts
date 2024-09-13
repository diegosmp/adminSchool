import { Request, Response } from 'express'
import { AllClassRoomService } from '../../services/classroom/AllClassRoomService'

class AllClassRoomController {
  async handle(req: Request, res: Response) {
    const allClassRoomService = new AllClassRoomService()
    const classRoom = await allClassRoomService.execute()

    return res.json(classRoom)
  }
}

export { AllClassRoomController }
