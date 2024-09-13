import { prismaCliente } from '../../prisma/prisma'

class AllMonitorService {
  async execute() {
    const monitor = await prismaCliente.monitor.findMany()

    return monitor
  }
}

export { AllMonitorService }
