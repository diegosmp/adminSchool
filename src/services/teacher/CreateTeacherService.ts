import { prismaCliente } from '../../prisma/prisma'

interface TeacherRequest {
  fullname: string
  classId: string
}

class CreateTeacherService {
  async execute({ fullname, classId }: TeacherRequest) {
    const teacher = await prismaCliente.teacher.create({
      data: {
        fullname,
        classId,
      },
    })

    return teacher
  }
}

export { CreateTeacherService }
