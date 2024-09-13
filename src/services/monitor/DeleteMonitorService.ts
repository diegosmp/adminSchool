import { prismaCliente } from '../../prisma/prisma'

class DeleteMonitorService {
  async execute(monitorId: string) {
    const monitor = await prismaCliente.monitor.delete({ where: { id: monitorId } })

    return monitor
  }
}

export { DeleteMonitorService }
