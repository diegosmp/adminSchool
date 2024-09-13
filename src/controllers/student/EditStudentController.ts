import { Request, Response } from 'express'
import { EditStudentService } from '../../services/student/EditStudentService'

class EditStudentController {
  async handle(req: Request, res: Response) {
    const { fullname, cpf, presence, status } = req.body
    const studentId = req.query.studentId as string

    const editStudentService = new EditStudentService()
    const student = await editStudentService.execute({ studentId, fullname, cpf, presence, status })

    return res.json(student)
  }
}

export { EditStudentController }
