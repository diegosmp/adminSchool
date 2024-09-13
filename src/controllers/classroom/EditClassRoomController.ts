import { Request, Response } from 'express'
import { EditClassRoomService } from '../../services/classroom/EditClassRoomService'

class EditClassRoomController {
  async handle(req: Request, res: Response) {
    const { nameClass, classTitle, courseName, status } = req.body
    const classId = req.query.classId as string

    const editClassRoomService = new EditClassRoomService()
    const classRoom = await editClassRoomService.execute({
      nameClass,
      classTitle,
      courseName,
      status,
      classId,
    })

    return res.json(classRoom)
  }
}

export { EditClassRoomController }
