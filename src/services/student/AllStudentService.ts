import { prismaCliente } from '../../prisma/prisma'

class AllStudentService {
  async execute() {
    const student = await prismaCliente.student.findMany()

    return student
  }
}

export { AllStudentService }
