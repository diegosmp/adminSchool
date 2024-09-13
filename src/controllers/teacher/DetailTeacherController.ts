import { Request, Response } from 'express'
import { DetailTeacherService } from '../../services/teacher/DetailTeacherService'

class DetailTeacherController {
  async handle(req: Request, res: Response) {
    const teacherId = req.query.teacherId as string

    const detailTeacherService = new DetailTeacherService()
    const teacher = await detailTeacherService.execute(teacherId)

    return res.json(teacher)
  }
}

export { DetailTeacherController }
