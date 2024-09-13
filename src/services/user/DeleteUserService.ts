import { prismaCliente } from '../../prisma/prisma'

class DeleteUserService {
  async execute(user_id: string) {
    const user = await prismaCliente.employed.delete({ where: { id: user_id } })
    return user
  }
}

export { DeleteUserService }
