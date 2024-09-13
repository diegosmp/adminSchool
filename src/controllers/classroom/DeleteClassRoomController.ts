import { Request, Response } from 'express'
import { DeleteClassRoomService } from '../../services/classroom/DeleteClassRoomService'

class DeleteClassRoomController {
  async handle(req: Request, res: Response) {
    const classId = req.query.classId as string

    const deleteClassRoomService = new DeleteClassRoomService()
    const classRoom = await deleteClassRoomService.execute(classId)

    return res.json(classRoom)
  }
}

export { DeleteClassRoomController }
