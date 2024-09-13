import { prismaCliente } from '../../prisma/prisma'

class DetailTeacherService {
  async execute(teacherId: string) {
    const teacher = await prismaCliente.teacher.findFirst({ where: { id: teacherId } })

    return teacher
  }
}

export { DetailTeacherService }
