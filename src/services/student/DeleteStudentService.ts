import { prismaCliente } from '../../prisma/prisma'

class DeleteStudentService {
  async execute(studentId: string) {
    const student = await prismaCliente.student.delete({ where: { id: studentId } })

    return student
  }
}

export { DeleteStudentService }
