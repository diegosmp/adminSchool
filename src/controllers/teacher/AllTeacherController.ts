import { Request, Response } from 'express'
import { AllTeacherService } from '../../services/teacher/AllTeacherService'

class AllTeacherController {
  async handle(req: Request, res: Response) {
    const allTeacherService = new AllTeacherService()
    const teacher = await allTeacherService.execute()

    return res.json(teacher)
  }
}

export { AllTeacherController }
