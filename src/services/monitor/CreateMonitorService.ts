import { prismaCliente } from '../../prisma/prisma'

interface MonitorRequest {
  fullname: string
  classId: string
}

class CreateMonitorService {
  async execute({ fullname, classId }: MonitorRequest) {
    const monitor = await prismaCliente.monitor.create({
      data: {
        fullname,
        classId,
      },
    })

    return monitor
  }
}

export { CreateMonitorService }
