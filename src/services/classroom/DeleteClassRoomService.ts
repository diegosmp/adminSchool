import { prismaCliente } from '../../prisma/prisma'

class DeleteClassRoomService {
  async execute(classId: string) {
    const classRoom = await prismaCliente.classRoom.delete({ where: { id: classId } })
    return classRoom
  }
}

export { DeleteClassRoomService }
