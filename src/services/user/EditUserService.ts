import { prismaCliente } from '../../prisma/prisma'

interface UserRequest {
  email: string
  password: string
  user_id: string
}

class EditUserService {
  async execute({ email, password, user_id }: UserRequest) {
    const user = await prismaCliente.employed.update({
      where: { id: user_id },
      data: {
        email,
        password,
      },
    })

    return user
  }
}

export { EditUserService }
