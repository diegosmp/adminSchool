import { Request, Response } from 'express'
import { DeleteTeacherService } from '../../services/teacher/DeleteTeacherService'

class DeleteTeacherController {
  async handle(req: Request, res: Response) {
    const teacherId = req.query.teacherId as string

    const deleteTeacherService = new DeleteTeacherService()
    const teacher = await deleteTeacherService.execute(teacherId)

    return res.json(teacher)
  }
}

export { DeleteTeacherController }
