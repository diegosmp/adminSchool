import { prismaCliente } from '../../prisma/prisma'

interface ClassRoomRequest {
  classId: string
  nameClass: string
  classTitle: string
  courseName: string
  status: boolean
}

class EditClassRoomService {
  async execute({ classId, nameClass, classTitle, courseName, status }: ClassRoomRequest) {
    const classRoom = await prismaCliente.classRoom.update({
      where: { id: classId },
      data: { nameClass, classTitle, courseName, status },
    })

    return classRoom
  }
}

export { EditClassRoomService }
