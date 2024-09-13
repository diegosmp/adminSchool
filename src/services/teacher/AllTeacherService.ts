import { prismaCliente } from '../../prisma/prisma'

class AllTeacherService {
  async execute() {
    const teacher = await prismaCliente.teacher.findMany()

    return teacher
  }
}

export { AllTeacherService }
