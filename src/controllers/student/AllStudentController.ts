import { Request, Response } from 'express'
import { AllStudentService } from '../../services/student/AllStudentService'

class AllStudentController {
  async handle(req: Request, res: Response) {
    const allStudentService = new AllStudentService()

    const student = await allStudentService.execute()

    return res.json(student)
  }
}

export { AllStudentController }
