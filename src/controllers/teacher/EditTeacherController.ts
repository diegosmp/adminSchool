import { Request, Response } from 'express'
import { EditTeacherService } from '../../services/teacher/EditTeacherService'

class EditTeacherController {
  async handle(req: Request, res: Response) {
    const { fullname, status } = req.body
    const teacherId = req.query.teacherId as string

    const editTeacherService = new EditTeacherService()
    const teacher = await editTeacherService.execute({ fullname, status, teacherId })

    return res.json(teacher)
  }
}

export { EditTeacherController }
