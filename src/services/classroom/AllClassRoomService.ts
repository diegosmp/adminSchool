import { prismaCliente } from '../../prisma/prisma'

class AllClassRoomService {
  async execute() {
    const classRoom = await prismaCliente.classRoom.findMany()
    return classRoom
  }
}

export { AllClassRoomService }
