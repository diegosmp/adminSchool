import { Request, Response } from 'express'
import { DetailStudentService } from '../../services/student/DetailStudentService'

class DetailStudentController {
  async handle(req: Request, res: Response) {
    const studentId = req.query.studentId as string

    const detailStudentService = new DetailStudentService()
    const student = await detailStudentService.execute(studentId)

    return res.json(student)
  }
}

export { DetailStudentController }
