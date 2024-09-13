import { prismaCliente } from '../../prisma/prisma'

class DetailStudentService {
  async execute(teacherId: string) {
    const student = await prismaCliente.student.findFirst({ where: { id: teacherId } })

    return student
  }
}

export { DetailStudentService }
