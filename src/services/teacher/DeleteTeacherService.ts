import { prismaCliente } from '../../prisma/prisma'

class DeleteTeacherService {
  async execute(teacherId: string) {
    const teacher = await prismaCliente.teacher.delete({ where: { id: teacherId } })

    return teacher
  }
}

export { DeleteTeacherService }
