import { prismaCliente } from '../../prisma/prisma'

interface MonitorRequest {
  monitorId: string
  fullname: string
  status: boolean
}

class EditMonitorService {
  async execute({ fullname, status, monitorId }: MonitorRequest) {
    const monitor = await prismaCliente.monitor.update({
      where: { id: monitorId },
      data: { fullname, status },
    })

    return monitor
  }
}

export { EditMonitorService }
