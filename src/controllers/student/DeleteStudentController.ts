import { Request, Response } from 'express'
import { DeleteStudentService } from '../../services/student/DeleteStudentService'

class DeleteStudentController {
  async handle(req: Request, res: Response) {
    const studentId = req.query.studentId as string

    const deleteStudentService = new DeleteStudentService()
    const student = await deleteStudentService.execute(studentId)

    return res.json(student)
  }
}

export { DeleteStudentController }
