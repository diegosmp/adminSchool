import { Request, Response } from 'express'
import { CreateTeacherService } from '../../services/teacher/CreateTeacherService'

class CreateTeacherController {
  async handle(req: Request, res: Response) {
    const { fullname, classId } = req.body
    const createTeacherService = new CreateTeacherService()
    const teacher = createTeacherService.execute({ fullname, classId })

    return res.json(teacher)
  }
}

export { CreateTeacherController }
