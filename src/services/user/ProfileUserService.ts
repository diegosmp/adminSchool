import { prismaCliente } from '../../prisma/prisma'

class ProfileUserService {
  async execute(user_id: string) {
    const user = await prismaCliente.employed.findFirst({
      where: { id: user_id },
      select: { firstname: true, secondname: true, id: true, email: true },
    })

    return user
  }
}

export { ProfileUserService }
