import { prismaCliente } from '../../prisma/prisma'

interface StudentRequest {
  fullname: string
  cpf: string
  classId: string
}

class CreateStudentService {
  async execute({ fullname, cpf, classId }: StudentRequest) {
    const student = await prismaCliente.student.create({
      data: {
        fullname,
        cpf,
        classId,
      },
    })

    return student
  }
}

export { CreateStudentService }
