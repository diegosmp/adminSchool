import { Request, Response } from 'express'
import { CreateClassRoomService } from '../../services/classroom/CreateClassRoomService'

class CreateClassRoomController {
  async handle(req: Request, res: Response) {
    const { nameClass, courseName, classTitle } = req.body
    const createClassRoomService = new CreateClassRoomService()
    const classRoom = await createClassRoomService.execute({ nameClass, courseName, classTitle })

    return res.json(classRoom)
  }
}

export { CreateClassRoomController }
