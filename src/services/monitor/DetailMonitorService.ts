import { prismaCliente } from '../../prisma/prisma'

class DetailMonitorService {
  async execute(monitorId: string) {
    const monitor = await prismaCliente.monitor.findFirst({ where: { id: monitorId } })

    return monitor
  }
}

export { DetailMonitorService }
