import { Request, Response } from 'express'
import { CreateStudentService } from '../../services/student/CreateStudentService'

class CreateStudentController {
  async handle(req: Request, res: Response) {
    const { fullname, cpf, classId } = req.body
    const createStudentService = new CreateStudentService()
    const student = await createStudentService.execute({ fullname, cpf, classId })

    return res.json(student)
  }
}

export { CreateStudentController }
