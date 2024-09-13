import { prismaCliente } from '../../prisma/prisma'

interface TeacherRequest {
  fullname: string
  status: boolean
  classId: string
}

class CreateTeacherService {
  async execute({ fullname, status, classId }: TeacherRequest) {
    const teacher = await prismaCliente.teacher.create({
      data: {
        fullname,
        status,
        classId,
      },
    })

    return teacher
  }
}

export { CreateTeacherService }
