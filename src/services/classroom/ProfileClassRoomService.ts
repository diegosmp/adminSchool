import { prismaCliente } from '../../prisma/prisma'

class ProfileClassRoomService {
  async execute(classId: string) {
    const classRoom = await prismaCliente.classRoom.findFirst({ where: { id: classId } })
    return classRoom
  }
}

export { ProfileClassRoomService }
