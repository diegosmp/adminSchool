import { prismaCliente } from '../../prisma/prisma'

interface UserRequest {
  user_id: string
  password: string
}

class ResetPasswordService {
  async execute({ user_id, password }: UserRequest) {
    const user = await prismaCliente.employed.update({ where: { id: user_id }, data: { password } })

    return user
  }
}

export { ResetPasswordService }
