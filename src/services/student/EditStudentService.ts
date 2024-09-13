import { prismaCliente } from '../../prisma/prisma'

interface StudentRequest {
  studentId: string
  fullname: string
  cpf: string
  presence: boolean
  status: boolean
}

class EditStudentService {
  async execute({ studentId, fullname, cpf, presence, status }: StudentRequest) {
    const student = await prismaCliente.student.update({
      where: { id: studentId },
      data: { fullname, cpf, presence, status },
    })

    return student
  }
}

export { EditStudentService }
