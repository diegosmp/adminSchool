import { prismaCliente } from '../../prisma/prisma'

interface TeacherRequest {
  teacherId: string
  fullname: string
  status: boolean
}

class EditTeacherService {
  async execute({ teacherId, fullname, status }: TeacherRequest) {
    const teacher = await prismaCliente.teacher.update({
      where: { id: teacherId },
      data: { fullname, status },
    })

    return teacher
  }
}

export { EditTeacherService }
