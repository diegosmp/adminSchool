import { prismaCliente } from '../../prisma/prisma'

interface ClassRoomRequest {
  nameClass: string
  classTitle: string
  courseName: string
}

class CreateClassRoomService {
  async execute({ nameClass, courseName, classTitle }: ClassRoomRequest) {
    const classRoom = await prismaCliente.classRoom.create({
      data: {
        nameClass,
        courseName,
        classTitle,
      },
    })

    return classRoom
  }
}

export { CreateClassRoomService }
