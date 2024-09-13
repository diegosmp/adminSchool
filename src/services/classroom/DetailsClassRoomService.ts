import { prismaCliente } from '../../prisma/prisma'

class DetailsClassRoomService {
  async execute(classId: string) {
    const classRoom = await prismaCliente.classRoom.findFirst({
      where: { id: classId },
      include: { students: true, monitor: true, teacher: true },
    })
    return classRoom
  }
}

export { DetailsClassRoomService }
